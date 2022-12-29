# import sys

# data_to_pass_to_js="Send to indexjs"

# input=sys.argv[1]

# print(input)

# sys.stdout.flush()



from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.firefox.options import Options
import sys
import json



def searchReddit(query):
    PATH = "./geckodriver"
    options = Options()
    options.headless = True
    PATH_TO_DEV_NULL = '/dev/null'
    driver = webdriver.Firefox(executable_path=PATH, options=options, service_log_path=PATH_TO_DEV_NULL)
    query.replace(' ', "%20")
    url = f"https://www.reddit.com/search/?q={query}"
    driver.get(url)
    # driver.implicitly_wait(5)
    try:
        temp = WebDriverWait(driver,10).until(EC.presence_of_element_located((By.CLASS_NAME, '_2i5O0KNpb9tDq0bsNOZB_Q')))
    except:
        print("NOT found")
        driver.quit()
        exit()
    data = []

    cards = driver.find_elements(By.CLASS_NAME, '_2i5O0KNpb9tDq0bsNOZB_Q')
    for card in cards:
        info = {}
        
        currData = card.text.split('\n')
        
        info['subreddit'] = currData[0]
        info['user'] = currData[3]
        temp = card.find_element(By.CLASS_NAME, '_eYtD2XCVieq6emjKBH3m')
        info['title'] = temp.text
        info['upvotes'] = currData[-3].replace('upvotes', ' ').strip()
        info['comments'] = currData[-2].replace('comments', ' ').strip()
        info['awards'] = currData[-1].replace('awards', ' ').strip()
        data.append(info)

    driver.quit()
    return data


query = ' '.join(sys.argv[1:])
# query="pewdiepie"
data = searchReddit(query)
with open('./reddit.json', 'w') as f:
    json.dump(data,f,indent=4)