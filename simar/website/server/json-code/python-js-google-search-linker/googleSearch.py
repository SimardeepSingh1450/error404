import requests, webbrowser
import json
from bs4 import BeautifulSoup
import re
from urllib.parse import urlparse
import sys


# user_inp = input("Search Keyword:")
user_inp=' '.join(sys.argv[1:])
user_input=''
for i in range(len(user_inp)):
    if user_inp[i] == ' ':
        user_input = user_input + '+'
    else:
        user_input = user_input + user_inp[i]

print("Bringing top results.")
res = requests.get('https://www.google.com/search?q=' + user_input)
soup = BeautifulSoup(res.text, 'html.parser')

results = soup.find_all('div', class_='egMi0 kCrYT')
title=soup.find_all('div',class_='BNeawe vvjwJb AP7Wnd')

imres='https://www.google.com/search?tbm=isch&q='+ user_input
vidres='https://www.google.com/search?tbm=vid&q='+user_input


l = len(results)

li = []
lit=[]

c ='googleSearch.json'

def findDomain(URL):
    domain = urlparse(URL).netloc
    return domain
def find(URL):
  url = re.findall('http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\), ]|(?:%[0-9a-fA-F][0-9a-fA-F]))+',URL)
  return url
for i in results:

    j = str(i)
    li.append(find(j))
for i in title:
    j=str(i.text)
    lit.append(j)




l2=[]
for i in range(len(li)):
    x=findDomain(li[i][0])
    z=li[i][0]
    w=z.index('&')
    di1 = {'User Input': user_inp, 'Google Images': imres, 'Videos': vidres}
    di1['Title'] = lit[i]
    di1['Link'] = z[:w]
    di1['Website'] = x
    l2.append(di1)
print(l2)



with open(c, 'w+') as f:
    json.dump(l2, f, indent=4)

