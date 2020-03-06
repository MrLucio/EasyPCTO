#from zeep import Client, helpers
from suds.client import Client

client = Client(wsdl="https://web.spaggiari.eu/services/ws/wsExtAuth.php?wsdl")

client.transport.session.proxies = {
    # Utilize for all http/https connections
    'http': 'foo.bar:3128',
    'https': 'foo.bar:3128',
}

with client.settings(raw_response=False, strict=False):

    response = client.service['wsExtAuth..ckAuth'](custcode='VRIT0007', login='S3965077Y', password='ml38905g')

print(response)

"""

<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
   <SOAP-ENV:Body>
      <ns1:wsExtAuth..ckAuthResponse xmlns:ns1="http://web.infoschool.eu/tic/wsExtAuth">
         <return xsi:type="SOAP-ENC:Array" SOAP-ENC:arrayType=":[4]">
            <item xsi:type="xsd:string" />
            <item xsi:type="xsd:string" />
            <item xsi:type="xsd:">
               <id xsi:type="xsd:string">3965077</id>
               <anno_scol xsi:type="xsd:string">2019</anno_scol>
               <sede_codice xsi:type="xsd:string">VRIT0007</sede_codice>
               <classe_ident xsi:type="xsd:string">864706</classe_ident>
               <classe_desc xsi:type="xsd:string">5BI INFORMATICA E TELECOMUNICAZIONI ART. INFORMATI</classe_desc>
               <cognome xsi:type="xsd:string">MATEIAS</cognome>
               <nome xsi:type="xsd:string">LUCIANO</nome>
               <data_nascita xsi:type="xsd:string">2000-10-20</data_nascita>
               <genere xsi:type="xsd:string">M</genere>
               <codice_fisc xsi:type="xsd:string">MTSLCN00R20L781W</codice_fisc>
               <cin xsi:type="xsd:string">Y</cin>
               <account_type xsi:type="xsd:string">S</account_type>
            </item>
            <item xsi:type="xsd:string">ok</item>
         </return>
      </ns1:wsExtAuth..ckAuthResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>

"""