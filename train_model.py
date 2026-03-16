import pandas as pd
import numpy as np
import pickle
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

# --------------------------------
# Load Dataset
# --------------------------------
df = pd.read_excel("mumbai_flood_ml_dataset_final.xlsx")

# Clean column names (important)
df.columns = df.columns.str.strip()

print("Columns loaded:", df.columns.tolist())

# --------------------------------
# Define Features and Target
# --------------------------------
X = df.drop(columns=["ID", "Area", "Flood_Severity_Index_0to10"])
y = df["Flood_Severity_Index_0to10"]

# --------------------------------
# Train-Test Split
# --------------------------------
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# --------------------------------
# Train Model
# --------------------------------
model = LinearRegression()
model.fit(X_train, y_train)

# --------------------------------
# Evaluate Model
# --------------------------------
y_pred = model.predict(X_test)

mae = mean_absolute_error(y_test, y_pred)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))
r2 = r2_score(y_test, y_pred)

print("\nModel Evaluation:")
print("MAE:", round(mae, 3))
print("RMSE:", round(rmse, 3))
print("R2 Score:", round(r2, 3))

# --------------------------------
# Save Model
# --------------------------------
with open("flood_model.pkl", "wb") as f:
    pickle.dump(model, f)

print("\nModel saved successfully as flood_model.pkl")