from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import json
suspicious_words = ["attack", "hit", "beat", "bomb"]
keywords = []
output = {}
analyser = SentimentIntensityAnalyzer()
#input_text = "This book is very good"
input_text = "This book is very good. Tomorrow we will attack and beat them on that place."
if((input_text[((len(input_text))-1)])=='.'):
    input_text = input_text[0:((len(input_text))-1)]
input_text = input_text.split('.')
a = 0
for input_text_after_split in input_text:
    a = a + 1
    for i in suspicious_words:
        if(input_text_after_split.count(i))!=0:
            keywords.append(i)
    result = analyser.polarity_scores(input_text_after_split)
    print("for ", a)
    print(result)
    output_after_split = {
        "result": result,
        "keywords": keywords
    }
    output[a] = output_after_split
 
# Serializing json
json_object = json.dumps(output, indent=a)
 
# Writing to sample.json
with open("test.json", "w") as outfile:
    outfile.write(json_object)

    
        

