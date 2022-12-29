from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import json
analyser = SentimentIntensityAnalyzer()
text = "This book is very good"
result = analyser.polarity_scores(text)
if(result['neg'])>=(result['neu']):
    if(result['neg'])==(result['neu']):
        result_sentiment  = "neu"
    else:
        result_sentiment  = "neg"
    if (result[result_sentiment])<=(result['pos']):
        if(result[result_sentiment])==(result['pos']):
            if (result_sentiment  == "neu"):
                result_sentiment  = "neu"
            else:
                result_sentiment  = "pos"
        else:
            result_sentiment  = "pos"
else:
    result_sentiment  = "neu";
    if (result[result_sentiment])<=(result['pos']):
        result_sentiment = "pos"
result_value =  result[result_sentiment]
print(result)
print("result sentiment - ",result_sentiment)
print("result value - ", result_value)
output = {
    "result sentiment": result_sentiment,
    "result value": result_value
}
json_object = json.dumps(output, indent=2)
with open("output.json", "w") as outfile:
    outfile.write(json_object)

    
        

