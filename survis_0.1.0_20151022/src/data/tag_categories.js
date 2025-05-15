// Define tag categories with descriptions for SurVis
// Each category key will group tags that share a common semantic dimension
define({
  tagCategories: {
    "type": {
      // Defines the publication type, such as survey or review
      "description": "Type of the paper (e.g., survey, review, empirical study)"
    },
    "method": {
      // Refers to the core algorithmic approach used in the paper
      "description": "Algorithm or method applied (e.g., boosting, knn, transformer)"
    },
    "model": {
      // Specifies the model name or architecture
      "description": "Model used or proposed (e.g., GPT-3, BERT, XGBoost)"
    },
    "application": {
      // Indicates the practical domain or task addressed
      "description": "Application area (e.g., chatbot, fraud detection, translation)"
    },
    "evaluation": {
      // Describes the type of experimental validation conducted
      "description": "Evaluation method (e.g., empirical, user study, benchmark)"
    },
    "data": {
      // Refers to the dataset or data modality
      "description": "Type or source of data (e.g., tabular, image, text)"
    },
    "task": {
      // Captures the machine learning task targeted
      "description": "Learning task (e.g., classification, summarization, clustering)"
    },
    "framework": {
      // Specifies the implementation platform or library
      "description": "Framework or tool used (e.g., PyTorch, HuggingFace, TensorFlow)"
    }
  }
});
