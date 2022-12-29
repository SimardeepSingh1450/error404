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
        tem2 = WebDriverWait(driver,10).until(EC.presence_of_element_located((By.CLASS_NAME, '_3ryJoIoycVkA88fy40qNJc')))
    except:
        print("NOT found")
        driver.quit()
        exit()
    data = []

    cards = driver.find_elements(By.CLASS_NAME, '_2i5O0KNpb9tDq0bsNOZB_Q')
    for card in cards:
        info = {}
        
        currData = card.text.split('\n')
        
        info['subreddit'] = card.find_element(By.CLASS_NAME, '_3ryJoIoycVkA88fy40qNJc').text
        info['user'] = card.find_element(By.CLASS_NAME, '_2tbHP6ZydRpjI44J3syuqC').text
        temp = card.find_element(By.CLASS_NAME, '_eYtD2XCVieq6emjKBH3m')
        info['title'] = temp.text
        smallData = card.find_elements(By.CLASS_NAME, '_vaFo96phV6L5Hltvwcox')
        
        info['upvotes'] = smallData[0].text.replace('upvotes', ' ').strip()
        info['comments'] = smallData[1].text.replace('comments', ' ').strip()
        info['awards'] = smallData[2].text.replace('awards', ' ').strip()
        data.append(info)

    driver.quit()
    return data


query = ' '.join(sys.argv[1:])
# query="lahore"
data = searchReddit(query)
with open('./reddit.json', 'w') as f:
    json.dump(data,f,indent=4)