import requests,webbrowser
import json
from bs4 import BeautifulSoup
user_input=input("Search Keyword:")
print("Bringing top results.")
res = requests.get('https://www.google.com/search?q='+user_input)
#print(res.text)
soup=BeautifulSoup(res.text,'lxml')
#results=soup.select('.r a')
results=soup.find_all('span',class_='BNeawe')
l=len(results)
#print(results)
li = []
for i in results[:l]:

    j=str(i)
    if 'url' in j:
        hind=j.index('url')
        lind=j.index('AP7Wnd')
        #print(j[hind:lind])
        li.append(j[hind:lind])
    else:
        continue
c=user_input+'.json'
li1=[]
for i in li:
    qind=i.index('?')
    pind=i.index('><')
    d=i[qind:pind]
    li1.append(d)


print(li1)
with open(c,'w+') as f:
        json.dump(li1,f,indent=4)