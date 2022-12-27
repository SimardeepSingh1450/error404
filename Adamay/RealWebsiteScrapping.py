import requests,webbrowser
import json
from bs4 import BeautifulSoup
import re

user_inp = input("Search Keyword:")
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
imres='https://www.google.com/search?tbm=isch&q='+ user_input
vidres='https://www.google.com/search?tbm=vid&q='+user_input


l = len(results)

li = []
c = user_input + '.json'

def find(URL):
  url = re.findall('http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\), ]|(?:%[0-9a-fA-F][0-9a-fA-F]))+',URL)
  return url
for i in results[:l]:

    j = str(i)
    li.append(find(j))

li1=[imres,vidres]
while [] in li:
    li.remove([])
for i in range(len(li)):
    li1.append(li[i][0])
print(li1)

with open(c, 'w+') as f:
    json.dump(li1, f, indent=4)

