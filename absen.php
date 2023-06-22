<?
if($IP=="") $IP="20.30.3.4";
if($Key=="") $Key="0";


    $Connect = fsockopen($IP, "80", $errno, $errstr, 1);
    if($Connect){
        $soap_request="<GetAttLog>
                            <ArgComKey xsi:type=\"xsd:integer\">".$Key."</ArgComKey>
                            <Arg><PIN xsi:type=\"xsd:integer\">All</PIN></Arg>
                        </GetAttLog>";
       
       

        $newLine="\r\n";
        fputs($Connect, "POST /iWsService HTTP/1.0".$newLine);
        fputs($Connect, "Content-Type: text/xml".$newLine);
        fputs($Connect, "Content-Length: ".strlen($soap_request).$newLine.$newLine);
        fputs($Connect, $soap_request.$newLine);
        $buffer="";
        while($Response=fgets($Connect, 1024)){
            $buffer=$buffer.$Response;
        }
    }else echo "Koneksi Gagal";
   
   
    $buffer=Parse_Data($buffer,"<GetAttLogResponse>","</GetAttLogResponse>");
    $buffer=explode("\r\n",$buffer);
    for($a=0;$a<count($buffer);$a++){
        $data=Parse_Data($buffer[$a],"<Row>","</Row>");
       
        $pin=Parse_Data($data,"<PIN>","</PIN>");
        $datetime=Parse_Data($data,"<DateTime>","</DateTime>");
        $status=Parse_Data($data,"<Status>","</Status>");
       
       
    }
   
?>