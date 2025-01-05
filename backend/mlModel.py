
import sys
import json
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score
import pandas as pd

df = pd.read_csv('parkinsons.csv')
df = df.select_dtypes(include=['number'])
X = df.drop(columns=['status'], axis=1)
Y = df['status']
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=2)

scaler = StandardScaler()
scaler.fit(X_train)
X_train_scaled = scaler.transform(X_train)
X_test_scaled = scaler.transform(X_test)

model = SVC(kernel='linear')
model.fit(X_train_scaled, Y_train)

def predictWithMLModel(input_data):
    std_data = scaler.transform([list(input_data.values())])
    prediction = model.predict(std_data)
    return "Parkinson's Disease Detected" if prediction[0] == 1 else "No symptoms found:Healthy"


if __name__ == "__main__":
    if len(sys.argv) > 1:
        input_data = json.loads(sys.argv[1])
        prediction = predictWithMLModel(input_data)
        print(json.dumps(prediction))
    else:
        print("Error: No input data provided.")