from suds.client import Client
url="https://climhy.lternet.edu/wambam/soap_server.pl?wsdl=ms001"
client = Client(url)

result = client.service.TMAXairpri01(begin='2015-3-3', end='2020-3-3') 
print (result) ## see: restult.txt below