from bs4 import BeautifulSoup
import requests
import json
from flask_cors import CORS, cross_origin
from flask import Flask,jsonify

app=Flask(__name__)
CORS(app)


@app.route('/sockgenerator')
def createSockPuppet():
    # nameset=query1
    # country=query2
    # gender=query3
    nameset="us"
    gender="random"
    country="us"
    url = f"https://www.fakenamegenerator.com/gen-{gender}-{nameset}-{country}.php"
    htmlPage = requests.get(url, headers={'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:107.0) Gecko/20100101 Firefox/107.0"})
    doc = BeautifulSoup(htmlPage.text, "html.parser")
    info = {}
    nameAaddr = doc.find('div',attrs={'class':'address'})
    info['name'] = nameAaddr.contents[1].text
    info['address'] = nameAaddr.contents[3].text.strip()
    # print(info['name'], info['address'])
    extras = doc.find('div', attrs={'class': 'extra'})
    temp = extras.contents
    for i in temp:
        if (i.name == "dl"):
            # print(type(i.contents[0]))
            if (i.contents[0] == '\n'):
                info[i.contents[1].text.strip()] = i.contents[3].text.strip();
                if (i.contents[1].text.strip() == "Email Address"):
                    k = i.contents[3].text.strip()
                    k = k.replace("This is a real email address. Click here to activate it!", "")
                    info['Email Address'] = k.strip()
    info.pop("QR Code")
    return info


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)

# nameset = "us"
# country = "us"
# gender = "random"

# url = f"https://www.fakenamegenerator.com/gen-{gender}-{nameset}-{country}.php"
# filename = "output.json"
# with open(filename, 'w') as f:
#     info = createSockPuppet(url)
#     json.dump(info, f, indent=4)

