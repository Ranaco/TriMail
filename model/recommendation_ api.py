from sklearn.metrics.pairwise import linear_kernel
import pandas as pd
import pickle
from flask import Flask, jsonify,request

app=Flask(__name__)
vectorizer = pickle.load(open('vectorizer.pickle', 'rb'))

df=pd.read_csv('papers.csv')


col_titlesentences = df.title.tolist()
col_id = df.id.tolist()
col_cont=df.abstract.tolist()

with open('feature_vectors.pkl', 'rb') as file:
    stored_vectors = pickle.load(file)



def cosine(test2):
    cosine_similarities = linear_kernel(test2, stored_vectors)
    num_domains = cosine_similarities.shape[0]
    related_docs_indices_list = []
    IDS = []
    my_dict = {}
    result = []
    cont = []

    for i in range(num_domains):
        cosine_similarities_i = cosine_similarities[i].flatten()
        related_docs_indices_i = cosine_similarities_i.argsort()[:-5:-1].tolist()
        related_docs_indices_list.extend(related_docs_indices_i)

        for j in related_docs_indices_i:
            my_dict[col_id[j]] = col_titlesentences[j]
            IDS.append(col_id[j])
            result.append(col_titlesentences[j])
            cont.append(col_cont[j])

    return result, IDS, cont


@app.route('/', methods=['GET', 'POST'])
def get_response():
    domain_names = request.json.get('domain_names')  # Change parameter name to domain_names
    test2 = vectorizer.transform(domain_names).toarray()
    result_knn, ids, conts_ = cosine(test2)
    print(result_knn, ids, conts_)
    return jsonify(result_knn, ids, conts_)

if __name__=='__main__':
    app.run()
