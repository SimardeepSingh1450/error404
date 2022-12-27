import requests,webbrowser
import json
from bs4 import BeautifulSoup
user_input=input("Search Keyword:")
print("Bringing top results.")
res = requests.get('https://www.google.com/search?q='+user_input)
soup = BeautifulSoup(res.text, 'lxml')
results = soup.find_all('span', class_='BNeawe')
l = len(results)

li = []

c = user_input + '.json'

def find(URL):
  url = re.findall('http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\), ]|(?:%[0-9a-fA-F][0-9a-fA-F]))+',URL)
  return url
for i in results[:l]:

    j = str(i)
    if 'url' in j:
        li.append(find(j)[0])
    else:
        continue

print(li)
with open(c, 'w+') as f:
    json.dump(li, f, indent=4)
