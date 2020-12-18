from requests import post, get

payload = {
    "or": [
        {
            "skill/role": {
                "text": "papa",
                "experience": "potential-to-develop"
            }
        }
    ]
}

opportunities = post(
    "https://search.torre.co/opportunities/_search/?size=1&aggregate=true",
    json=payload
).json()

print("#### Opportunities ####")
print("> Aggregators: ")
for agg in opportunities["aggregators"].keys():
    print("{},{}".format(agg, ','.join(map(lambda x: x["value"], opportunities["aggregators"][agg]))))
print(">Fields: ")
print(opportunities["results"][0].keys())

people = post(
    "https://search.torre.co/people/_search/?size=1&aggregate=true",
    json=payload
).json()

print("\n\n#### People ####")
print("> Aggregators: ")
for agg in people["aggregators"].keys():
    print("{},{}".format(agg, ','.join(map(lambda x: x["value"], people["aggregators"][agg]))))
print(">Fields: ")
print(people["results"][0].keys())