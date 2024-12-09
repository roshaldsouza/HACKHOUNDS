import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.impute import SimpleImputer

class DataPreprocessor:
    def __init__(self, dataset_path):
        """
        Initialize the data preprocessing class.
        
        Parameters:
        -----------
        dataset_path : str
            Path to the CSV file containing mental health data
        """
        self.dataset_path = dataset_path
        self.original_data = pd.read_csv(dataset_path)
        self.preprocessed_data = None
        self.label_encoder = LabelEncoder()

    def preprocess_data(self):
        """
        Comprehensive data preprocessing pipeline
        """
        df = self.original_data.copy()

        # Handle datetime features
        if 'start_time' in df.columns:
            try:
                df['start_time'] = pd.to_datetime(df['start_time'], dayfirst=True)
            except:
                try:
                    df['start_time'] = pd.to_datetime(df['start_time'], format='%d-%m-%Y %H:%M')
                except Exception as e:
                    print(f"Datetime parsing error: {e}")
                    return None

            # Extract time-based features
            df['day_of_week'] = df['start_time'].dt.day_name()
            df['hour_of_day'] = df['start_time'].dt.hour
            df['is_weekend'] = df['start_time'].dt.day_name().isin(['Saturday', 'Sunday']).astype(int)

        # Handle categorical variables
        categorical_columns = []
        if 'day_of_week' in df.columns:
            categorical_columns.append('day_of_week')
        if 'sex' in df.columns:
            categorical_columns.append('sex')

        if categorical_columns:
            df = pd.get_dummies(df, columns=categorical_columns, drop_first=True)

        # Handle missing values
        numeric_columns = df.select_dtypes(include=['float64', 'int64']).columns
        imputer = SimpleImputer(strategy='median')
        df[numeric_columns] = imputer.fit_transform(df[numeric_columns])

        # Encode the target variable
        if 'depression_severity' in df.columns:
            df['depression_severity_encoded'] = self.label_encoder.fit_transform(df['depression_severity'])
        else:
            print("Warning: 'depression_severity' column not found")
            return None

        # Select features
        feature_columns = [
            'age', 'interest_pleasure', 'feeling_down', 'sleep_issues', 
            'fatigue', 'appetite_changes', 'feeling_bad_self', 'concentration', 
            'movement_speech', 'suicidal_thoughts', 'depression_score', 
            'happiness_score', 'hour_of_day', 'is_weekend'
        ]

        # Add one-hot encoded columns (e.g., day_of_week and sex)
        feature_columns.extend([col for col in df.columns if col.startswith(('day_of_week_', 'sex_'))])

        # Add PHQ-9 question columns (q1-q47)
        phq_columns = [col for col in df.columns if col.startswith('q')]
        feature_columns.extend(phq_columns)

        # Ensure all feature columns exist
        feature_columns = [col for col in feature_columns if col in df.columns]

        # Prepare feature matrix (X) and target vector (y)
        X = df[feature_columns]
        y = df['depression_severity_encoded']

        # Store preprocessed data as a dictionary
        self.preprocessed_data = {
            'X': X,
            'y': y,
            'feature_names': feature_columns
        }

        return self.preprocessed_data  # Return the dictionary here
