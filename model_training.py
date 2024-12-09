import logging
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report
from data_preprocessing import DataPreprocessor
import joblib

class MentalHealthModel:
    def __init__(self, dataset_path):
        """
        Initialize the MentalHealthModel with the dataset path.
        
        Parameters:
        -----------
        dataset_path : str
            Path to the CSV file containing the processed depression data.
        """
        self.dataset_path = dataset_path
        self.preprocessor = DataPreprocessor(dataset_path)
        self.model = None
        self.X_train = None
        self.X_test = None
        self.y_train = None
        self.y_test = None

        # Prepare data
        self._prepare_data()

    def _prepare_data(self):
        """
        Preprocess the data and split it into training and test sets.
        """
        # Preprocess the data using the DataPreprocessor
        preprocessed_data = self.preprocessor.preprocess_data()

        # Extract features and target variable from preprocessed data
        self.X_train, self.X_test, self.y_train, self.y_test = train_test_split(
            preprocessed_data['X'], preprocessed_data['y'], test_size=0.2, random_state=42
        )

    def train_model(self):
        """
        Train a machine learning model using the preprocessed training data.
        """
        logging.info("Training the model...")
        self.model = RandomForestClassifier(n_estimators=100, random_state=42)
        self.model.fit(self.X_train, self.y_train)

        # Save the trained model
        joblib.dump(self.model, 'mental_health_model.pkl')
        logging.info("Model training complete and saved.")

    def evaluate_model(self):
        """
        Evaluate the model using the test set and print classification report.
        """
        logging.info("Evaluating the model...")
        y_pred = self.model.predict(self.X_test)
        report = classification_report(self.y_test, y_pred)
        logging.info(f"Model Evaluation Report:\n{report}")

        accuracy = self.model.score(self.X_test, self.y_test)
        logging.info(f"Accuracy: {accuracy}")

    def predict_new_data(self, new_data):
        """
        Preprocesses new data, makes predictions, and logs the results.
        
        Parameters:
        -----------
        new_data : dict
            A dictionary containing the new data for prediction.
        """
        import pandas as pd  # Ensure pandas is imported

        # Convert the new data dictionary into a DataFrame
        new_data_df = pd.DataFrame(new_data)

        # Preprocess the new data (make sure it's in the same format as the training data)
        new_data_processed = self.preprocessor.preprocess_data()

        # Make predictions
        predictions = self.model.predict(new_data_processed['X'])

        # Log the predictions
        logging.info(f"Predictions for the new data: {predictions}")
        return predictions
