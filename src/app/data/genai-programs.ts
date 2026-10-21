import { ProgramItem } from '../models/program.model';

export const GENAI_PROGRAMS: ProgramItem[] = [
  {
    "id": "genai-1",
    "number": "1",
    "definition": "Write a Python program to sort the words of a given string in alphabetical order.",
    "language": "python",
    "files": [
      {
        "filename": "solution_01.py",
        "language": "python",
        "code": "text = \"banana apple mango orange\" \nwords = text.split() \nwords.sort() \nprint(words) \nprint(\" \".join(words))"
      }
    ]
  },
  {
    "id": "genai-2",
    "number": "2",
    "definition": "Write a Python program to search for a specified word in a given string.",
    "language": "python",
    "files": [
      {
        "filename": "solution_02.py",
        "language": "python",
        "code": "text = \"Python is easy to learn\" \nword = \"easy\" \nif word in text: \n    print(\"Found\") \nelse: \n    print(\"Not Found\")"
      }
    ]
  },
  {
    "id": "genai-3",
    "number": "3",
    "definition": "Write a Python program to format and display variables within a string using string formatting techniques.",
    "language": "python",
    "files": [
      {
        "filename": "solution_03.py",
        "language": "python",
        "code": "name = \"Nehal\" \nage = 51 \nprint(f\"My name is {name} and I am {age} years old.\") \nprint(\"My name is {} and I am {} years old.\".format(name, age))"
      }
    ]
  },
  {
    "id": "genai-4",
    "number": "4",
    "definition": "Write a Python program to find a specified word in a string and replace it with another word.",
    "language": "python",
    "files": [
      {
        "filename": "solution_04.py",
        "language": "python",
        "code": "text = \"I like Java.\" \nnew_text = text.replace(\"Java\", \"Python\") \nprint(new_text)"
      }
    ]
  },
  {
    "id": "genai-5",
    "number": "5",
    "definition": "Write a Python program to remove all occurrences of a specified word from a given string.",
    "language": "python",
    "files": [
      {
        "filename": "solution_05.py",
        "language": "python",
        "code": "text = \"Python is very very easy\" \nwords = text.split() \nfiltered = [word for word in words if word != \"very\"] \nprint(\" \".join(filtered))"
      }
    ]
  },
  {
    "id": "genai-6",
    "number": "6",
    "definition": "Write a Python program to count the total number of words in a given string.",
    "language": "python",
    "files": [
      {
        "filename": "solution_06.py",
        "language": "python",
        "code": "text = \"Python is easy to learn\" \ncount = len(text.split()) \nprint(count)"
      }
    ]
  },
  {
    "id": "genai-7",
    "number": "7",
    "definition": "Write a Python program to remove all punctuation characters from a given string.",
    "language": "python",
    "files": [
      {
        "filename": "solution_07.py",
        "language": "python",
        "code": "import string \ntext = \"Hello, World! Welcome.\" \nresult = text.translate(str.maketrans('', '', string.punctuation)) \nprint(result)"
      }
    ]
  },
  {
    "id": "genai-8",
    "number": "8",
    "definition": "Write a Python program to split a given string into tokens using a specified delimiter.",
    "language": "python",
    "files": [
      {
        "filename": "solution_08.py",
        "language": "python",
        "code": "text = \"Apple,Banana,Mango,Orange\" \ntokens = text.split(\",\") \nprint(tokens)"
      }
    ]
  },
  {
    "id": "genai-9",
    "number": "9",
    "definition": "Write a Python program to convert a given string into uppercase, lowercase, title case, capitalize case, and swap case.",
    "language": "python",
    "files": [
      {
        "filename": "solution_09.py",
        "language": "python",
        "code": "text = \"Python Programming\" \nprint(text.upper()) \nprint(text.lower()) \nprint(text.title()) \nprint(text.capitalize()) \nprint(text.swapcase())"
      }
    ]
  },
  {
    "id": "genai-10",
    "number": "10",
    "definition": "Write a Python program to split a string into individual words and then join them using a specified separator.",
    "language": "python",
    "files": [
      {
        "filename": "solution_10.py",
        "language": "python",
        "code": "text = \"Python is easy\" \nwords = text.split() \nprint(words) \njoined = \"-\".join(words) \nprint(joined)"
      }
    ]
  },
  {
    "id": "genai-11",
    "number": "11",
    "definition": "Write a Python program to summarize a given English paragraph into a concise summary using a pre-trained model.",
    "language": "python",
    "files": [
      {
        "filename": "solution_11.py",
        "language": "python",
        "code": "# pip install transformers torch sentencepiece \nfrom transformers import pipeline \n \nsummarizer = pipeline(\"summarization\", model=\"sshleifer/distilbart-cnn-12-6\") \ntext = \"Your long text here...\" \nresult = summarizer(text, max_length=60, min_length=20, do_sample=False) \nprint(result[0][\"summary_text\"])"
      }
    ]
  },
  {
    "id": "genai-12",
    "number": "12",
    "definition": "Write a Python program to translate a given English sentence into Hindi using a pre-trained model.",
    "language": "python",
    "files": [
      {
        "filename": "solution_12.py",
        "language": "python",
        "code": "# pip install transformers torch sentencepiece \nfrom transformers import pipeline \n \ntranslator = pipeline(\"translation\", model=\"Helsinki-NLP/opus-mt-en-fr\") \ntext = \"Artificial Intelligence is changing the world.\" \nresult = translator(text) \nprint(result[0][\"translation_text\"])"
      }
    ]
  },
  {
    "id": "genai-13",
    "number": "13",
    "definition": "Write a Python program to paraphrase a given paragraph while preserving its original meaning using a pre-trained model.",
    "language": "python",
    "files": [
      {
        "filename": "solution_13.py",
        "language": "python",
        "code": "# pip install transformers torch sentencepiece \nfrom transformers import pipeline \n \nparaphraser = pipeline(\"text2text-generation\", \nmodel=\"humarin/chatgpt_paraphraser_on_T5_base\") \ntext = \"Python is an easy programming language.\" \nresult = paraphraser(text) \nprint(result[0][\"generated_text\"])"
      }
    ]
  },
  {
    "id": "genai-14",
    "number": "14",
    "definition": "Write a Python program to simplify a complex paragraph into easy-to-understand English using a pre-trained model.",
    "language": "python",
    "files": [
      {
        "filename": "solution_14.py",
        "language": "python",
        "code": "# pip install transformers torch sentencepiece \nfrom transformers import pipeline \n \nsimplifier = pipeline(\"text2text-generation\", model=\"t5-small\") \ntext = \"simplify: The physician administered medication.\" \nresult = simplifier(text) \nprint(result[0][\"generated_text\"])"
      }
    ]
  },
  {
    "id": "genai-15",
    "number": "15",
    "definition": "Write a Python program to identify and correct grammatical errors in a given English paragraph using a pre-trained model.",
    "language": "python",
    "files": [
      {
        "filename": "solution_15.py",
        "language": "python",
        "code": "# pip install transformers torch sentencepiece \nfrom transformers import pipeline \n \ncorrector = pipeline(\"text2text-generation\", model=\"vennify/t5-base-grammar-correction\") \ntext = \"grammar: He go to school yesterday.\" \nresult = corrector(text) \nprint(result[0][\"generated_text\"])"
      }
    ]
  },
  {
    "id": "genai-16",
    "number": "16",
    "definition": "Write a Python program to expand a short paragraph into a more detailed paragraph using a pre-trained model.",
    "language": "python",
    "files": [
      {
        "filename": "solution_16.py",
        "language": "python",
        "code": "# pip install transformers torch sentencepiece \nfrom transformers import pipeline \n \ngenerator = pipeline(\"text2text-generation\", model=\"google/flan-t5-base\") \ntext = \"Expand: AI helps doctors.\" \nresult = generator(text) \nprint(result[0][\"generated_text\"])"
      }
    ]
  },
  {
    "id": "genai-17",
    "number": "17",
    "definition": "Write a Python program to generate a short paragraph on a given topic using a pre-trained language model.",
    "language": "python",
    "files": [
      {
        "filename": "solution_17.py",
        "language": "python",
        "code": "# pip install transformers torch \nfrom transformers import pipeline \n \ngenerator = pipeline(\"text-generation\", model=\"gpt2\") \nresult = generator(\"Artificial Intelligence\", max_length=80) \nprint(result[0][\"generated_text\"])"
      }
    ]
  },
  {
    "id": "genai-18",
    "number": "18",
    "definition": "Write a Python program to complete an incomplete English sentence based on the given text using a pre-trained model.",
    "language": "python",
    "files": [
      {
        "filename": "solution_18.py",
        "language": "python",
        "code": "# pip install transformers torch \nfrom transformers import pipeline \n \ngenerator = pipeline(\"text-generation\", model=\"gpt2\") \nresult = generator(\"Python is\", max_length=50) \nprint(result[0][\"generated_text\"])"
      }
    ]
  },
  {
    "id": "genai-19",
    "number": "19",
    "definition": "Write a Python program to answer questions based on a given English passage using a pre-trained question-answering model.",
    "language": "python",
    "files": [
      {
        "filename": "solution_19.py",
        "language": "python",
        "code": "# pip install transformers torch \nfrom transformers import pipeline \n \nqa = pipeline(\"question-answering\") \nresult = qa( \n    question=\"What is the capital of France?\", \n    context=\"Paris is the capital of France.\" \n) \nprint(result[\"answer\"])"
      }
    ]
  },
  {
    "id": "genai-20",
    "number": "20",
    "definition": "Write a Python program to classify the sentiment of a given English movie review as Positive, Negative, or Neutral using a pre-trained model.",
    "language": "python",
    "files": [
      {
        "filename": "solution_20.py",
        "language": "python",
        "code": "# pip install transformers torch \nfrom transformers import pipeline \n \nclassifier = pipeline(\"sentiment-analysis\") \nresult = classifier(\"I love Python.\") \nprint(result)"
      }
    ]
  },
  {
    "id": "genai-21",
    "number": "21",
    "definition": "Write a Python program to classify a given news article into one of the categories: Sports, Business, Technology, or Politics using a pre-trained model.",
    "language": "python",
    "files": [
      {
        "filename": "solution_21.py",
        "language": "python",
        "code": "# pip install transformers torch \nfrom transformers import pipeline \n \nclassifier = pipeline(\"text-classification\", model=\"distilbert-base-uncased-finetuned-sst-2-english\") \nresult = classifier(\"This product is excellent.\") \nprint(result)"
      }
    ]
  },
  {
    "id": "genai-22",
    "number": "22",
    "definition": "Write a Python program to identify and extract the names of persons, organizations, locations, and dates from a given English paragraph using a pre-trained model.",
    "language": "python",
    "files": [
      {
        "filename": "solution_22.py",
        "language": "python",
        "code": "# pip install transformers torch \nfrom transformers import pipeline \n \nner = pipeline(\"ner\", grouped_entities=True) \nresult = ner(\"Elon Musk founded SpaceX in the United States.\") \nprint(result)"
      }
    ]
  },
  {
    "id": "genai-23",
    "number": "23",
    "definition": "Write a Python program to extract the five most important keywords from a given English document using a pre-trained model.",
    "language": "python",
    "files": [
      {
        "filename": "solution_23.py",
        "language": "python",
        "code": "# pip install keybert sentence-transformers \nfrom keybert import KeyBERT \n \nkw_model = KeyBERT() \ntext = \"Artificial Intelligence and Machine Learning are transforming healthcare.\" \nkeywords = kw_model.extract_keywords(text) \nprint(keywords)"
      }
    ]
  },
  {
    "id": "genai-24",
    "number": "24",
    "definition": "Write a Python program to rewrite a given English paragraph in a formal writing style using a pre-trained model.",
    "language": "python",
    "files": [
      {
        "filename": "solution_24.py",
        "language": "python",
        "code": "# pip install transformers torch sentencepiece \nfrom transformers import pipeline \n \nrewriter = pipeline(\"text2text-generation\", model=\"google/flan-t5-base\") \ntext = \"Rewrite formally: Send me the report.\" \nresult = rewriter(text) \nprint(result[0][\"generated_text\"])"
      }
    ]
  },
  {
    "id": "genai-25",
    "number": "25",
    "definition": "Write a Python program to identify the primary topic of a given English document from the categories: Education, Health, Technology, Business, or Sports using a pre-trained model.",
    "language": "python",
    "files": [
      {
        "filename": "solution_25.py",
        "language": "python",
        "code": "# pip install transformers torch \nfrom transformers import pipeline \n \nclassifier = pipeline(\"zero-shot-classification\") \nresult = classifier( \n    \"Python is widely used in Artificial Intelligence.\", \n    candidate_labels=[\"Technology\", \"Sports\", \"Politics\", \"Health\"] \n) \nprint(result)"
      }
    ]
  },
  {
    "id": "genai-26",
    "number": "26",
    "definition": "Write a Python program to classify a given email message as Spam or Not Spam using a pre-trained model.",
    "language": "python",
    "files": [
      {
        "filename": "solution_26.py",
        "language": "python",
        "code": "# pip install transformers torch \nfrom transformers import pipeline \n \nclassifier = pipeline(\"text-classification\", model=\"mrm8488/bert-tiny-finetuned-sms-spam-detection\") \nresult = classifier(\"Congratulations! You have won a free iPhone.\") \nprint(result)"
      }
    ]
  },
  {
    "id": "genai-27",
    "number": "27",
    "definition": "Write a Python program to detect the language of a given text from English, Hindi, Gujarati, French, German, or Spanish using a pre-trained model.",
    "language": "python",
    "files": [
      {
        "filename": "solution_27.py",
        "language": "python",
        "code": "# pip install transformers torch sentencepiece \nfrom transformers import pipeline \n \ndetector = pipeline(\"text-classification\", model=\"papluca/xlm-roberta-base-language-detection\") \nresult = detector(\"Bonjour tout le monde\") \nprint(result)"
      }
    ]
  }
];
