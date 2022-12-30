import json
import pandas as pd
import xlsxwriter
import sys

def auto_adjust_excel_columns(worksheet, df):
    for idx, col in enumerate(df):  # loop through all columns
        series = df[col]
        max_len = (
            max((series.astype(str).map(len).max(),  # len of largest item
len(str(series.name)),  # len of column name/header
                )
            )
            + 1
        )  # adding a little extra space
        worksheet.set_column(idx, idx, max_len)  # set column width

def readFile(f):
    file = open(f,'r')
    data = json.load(file)
    file.close()
    return data

def duckduckgo(fileName):
    
    data = readFile(fileName) 
    title = []
    text = []
    website = []
    news_link = []
    image = []

    for i in data:
        title.append(i['title'])
        text.append(i['text'])
        website.append(i['website'])
        news_link.append(i['news-link'])
        # if (i['image']):
        try:
            image.append(i['image'])
        except:
            image.append(' ')

    duck = pd.DataFrame({'Title': title, 'Text': text, 'Website': website, 'News Link': news_link, 'Image': image})
    return duck


def reddit(fileName):
    data = readFile(fileName)
    temp = pd.DataFrame(data)
    return temp

def sherlock(fileName):
    data = readFile(fileName)
    temp = pd.DataFrame(data.items(), columns=["Website Name", "Links"])
    return temp

def googleSearch(fileName):
    data = readFile(fileName)
    temp = pd.DataFrame(data, columns=["Links"])
    return temp

def id_data(fileName):
    data = readFile(fileName)
    temp = pd.DataFrame(data)
    return temp





cla = sys.argv[1:]
if (cla[0] == 'p'):
    writer = pd.ExcelWriter(f'{cla[1]}', engine='xlsxwriter')
    cla.pop(0)
    cla.pop(0)
else:
    writer = pd.ExcelWriter('output.xlsx', engine='xlsxwriter')

n = len(cla)
for i in range(0,n,2):

    if (cla[i] == 'd'):
        duck = duckduckgo(f'{cla[i+1]}')
        duck.to_excel(writer, sheet_name='DuckDuckGo News', index=False)
        auto_adjust_excel_columns(writer.sheets['DuckDuckGo News'], duck)

    if (cla[i] == 'r'):
        red = reddit(f'{cla[i+1]}')
        red.to_excel(writer, sheet_name='Reddit', index = False)
        auto_adjust_excel_columns(writer.sheets['Reddit'], red)

    if (cla[i] == 's'):
        sher = sherlock(f'{cla[i+1]}')
        sher.to_excel(writer, sheet_name='Profiles', index=False)
        auto_adjust_excel_columns(writer.sheets['Profiles'], sher)

    if (cla[i] == 'g'):
        google = googleSearch(f'{cla[i+1]}')
        google.to_excel(writer, sheet_name='Google Search', index=False)
        auto_adjust_excel_columns(writer.sheets['Google Search'], google)

    if (cla[i] == 'ti'):
        twitter = id_data(f'{cla[i+1]}')
        twitter.to_excel(writer, sheet_name="Twitter ID's", index = False)
        auto_adjust_excel_columns(writer.sheets["Twitter ID's"], twitter)

    if (cla[i] == 'td'):
        twitter_data = id_data(f'{cla[i+1]}')
        twitter_data.to_excel(writer, sheet_name="Tweets", index = False)
        auto_adjust_excel_columns(writer.sheets["Tweets"], twitter_data)

writer.save()