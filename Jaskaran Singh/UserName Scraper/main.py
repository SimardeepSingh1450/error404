import subprocess
import json


def searchUsername(query, timeout=1):
    # Taking Data
    p = subprocess.Popen([f'cd sherlock && python3 sherlock {query} --timeout {timeout} > ../{query}.txt'], shell=True)
    p.wait()

    # Removing Default File
    p1 = subprocess.Popen([f'rm -f ./sherlock/{query}.txt'], shell=True)
    p1.wait()

    file = open(f'{query}.txt','r')
    data = file.read().strip().split('\n')
    data.pop()
    final = {}
    for i in range(2,len(data)-3):
        temp = data[i]
        temp = temp.replace('[+]', ' ')
        indx = temp.find(':')
        final[temp[0:indx].strip()] = temp[indx+1:].strip()
        
    file.close()
    p1 = subprocess.Popen([f'rm -f {query}.txt'], shell=True)
    p1.wait()
    return final



query = "ronaldo"
timeout = 1
output = searchUsername(query,timeout)
with open('output.json', 'w') as f:
    json.dump(output,f, indent=4)
