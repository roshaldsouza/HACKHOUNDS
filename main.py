import logging
from model_training import MentalHealthModel

# Configure logging
logging.basicConfig(level=logging.INFO)

def main():
    # Path to your dataset
    dataset_path = r"C:\Users\Roshal\Desktop\mental\archive\processed_depression_dataset.csv"  # Replace with actual path
    
    # Initialize the MentalHealthModel with the dataset path
    logging.info(f"Initializing the MentalHealthModel with dataset path: {dataset_path}")
    mh_model = MentalHealthModel(dataset_path)
    
    # Prepare data and train the model
    logging.info("Preparing the data (handling missing values, encoding categorical features, etc.)")
    mh_model.train_model()

    # Evaluate the model
    logging.info("Evaluating the model...")
    mh_model.evaluate_model()

    # Predict new data (example: change as per your requirements)
    new_data = {
        'age': [25],
        'interest_pleasure': [2],
        'feeling_down': [3],
        'sleep_issues': [1],
        'fatigue': [2],
        'appetite_changes': [3],
        'feeling_bad_self': [1],
        'concentration': [2],
        'movement_speech': [1],
        'suicidal_thoughts': [0],
        'depression_score': [18],
        'happiness_score': [4],
        'hour_of_day': [15],
        'is_weekend': [0]
    }
    
    logging.info("Predicting new data...")
    mh_model.predict_new_data(new_data)

if __name__ == "__main__":
    main()
