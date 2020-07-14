from igql import InstagramGraphQL
import csv

resultFile = 'comments.csv'


igql_api = InstagramGraphQL()
media = igql_api.get_media('BVK4bXlhqUE')

# fields = ['id', 'text', 'crea']

comments = []
for comments_batch in media.comments():
    page.click()
    comments.append(comments_batch)

with open(resultFile, 'w') as csvfile:
    csvwriter = csv.writer(csvfile)

    # csvwriter.writeheader()
    for i in range(len(comments)):
        print(comments[i][0]['node']['owner']['username'])
        # csvwriter.writerow(str(i['username']))


print(len(comments))
print(comments[1][0]['node'])
