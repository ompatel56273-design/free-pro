import { ProgramItem } from '../models/program.model';

export const PHP_PROGRAMS: ProgramItem[] = [
  {
    "id": "php-1",
    "number": "1",
    "definition": "Read 6 AM and 6 PM temperatures using an HTML form. Find the absolute difference, check whether both are integers, and round the first temperature to 2 decimal places.",
    "language": "php",
    "files": [
      {
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html> \n<html> \n<head> \n    <title>Temperature</title> \n</head> \n<body> \n \n<h2>Temperature Calculation</h2> \n \n<form method=\"post\" action=\"temperature.php\"> \n \n    <label>Temperature at 6 AM:</label> \n    <input type=\"text\" name=\"temp1\" required> \n    <br><br> \n \n    <label>Temperature at 6 PM:</label> \n    <input type=\"text\" name=\"temp2\" required> \n    <br><br> \n \n    <input type=\"submit\" value=\"Calculate\"> \n \n</form> \n \n</body> \n</html>"
      },
      {
        "filename": "temperature.php",
        "language": "php",
        "code": "<?php \n \n$temp1 = $_POST['temp1']; \n$temp2 = $_POST['temp2']; \n \n// Absolute difference \n$difference = abs($temp1 - $temp2); \n \n// Check whether temperatures are integers \nif (filter_var($temp1, FILTER_VALIDATE_INT) !== false) { \n    $check1 = \"6 AM temperature is an integer.\"; \n} else { \n    $check1 = \"6 AM temperature is not an integer.\"; \n} \n \nif (filter_var($temp2, FILTER_VALIDATE_INT) !== false) { \n    $check2 = \"6 PM temperature is an integer.\"; \n} else { \n    $check2 = \"6 PM temperature is not an integer.\"; \n} \n \n// Round first temperature to 2 decimal places \n$roundedTemp1 = round($temp1, 2); \n \necho \"<h2>Temperature Result</h2>\"; \n \necho \"6 AM Temperature: \" . $temp1 . \"<br>\"; \necho \"6 PM Temperature: \" . $temp2 . \"<br>\"; \necho \"Absolute Difference: \" . $difference . \"<br>\"; \necho $check1 . \"<br>\"; \necho $check2 . \"<br>\"; \necho \"6 AM Temperature after rounding: \" . $roundedTemp1; \n \n?>"
      }
    ]
  },
  {
    "id": "php-2",
    "number": "2",
    "definition": "Read birthdate using an HTML date picker and print it in different formats using PHP date format specifiers.",
    "language": "php",
    "files": [
      {
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html> \n<html> \n<head> \n    <title>Birthdate</title> \n</head> \n<body> \n \n<h2>Birthdate Format</h2> \n \n<form method=\"post\" action=\"birthdate.php\"> \n \n    <label>Enter Birthdate:</label> \n    <input type=\"date\" name=\"birthdate\" required> \n \n    <br><br> \n \n    <input type=\"submit\" value=\"Display Date\"> \n \n</form> \n \n</body> \n</html>"
      },
      {
        "filename": "birthdate.php",
        "language": "php",
        "code": "<?php \n \n$birthdate = $_POST['birthdate']; \n \n$date = new DateTime($birthdate); \n \necho \"<h2>Birthdate in Different Formats</h2>\"; \n \necho \"Format 1 (d-m-Y): \" . $date->format(\"d-m-Y\") . \"<br>\"; \necho \"Format 2 (d/m/Y): \" . $date->format(\"d/m/Y\") . \"<br>\"; \necho \"Format 3 (d M Y): \" . $date->format(\"d M Y\") . \"<br>\"; \necho \"Format 4 (d F Y): \" . $date->format(\"d F Y\") . \"<br>\"; \necho \"Format 5 (l, d F Y): \" . $date->format(\"l, d F Y\") . \"<br>\"; \necho \"Format 6 (Y-m-d): \" . $date->format(\"Y-m-d\") . \"<br>\"; \n \n?>"
      }
    ]
  },
  {
    "id": "php-3",
    "number": "3",
    "definition": "Read college name from an HTML form, count characters, check whether the last word is 'college' case-insensitively, and replace 'college' with 'university'.",
    "language": "php",
    "files": [
      {
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html> \n<html> \n<head> \n    <title>College Name</title> \n</head> \n<body> \n \n<h2>College Name</h2> \n \n<form method=\"post\" action=\"college.php\"> \n \n    <label>Enter College Name:</label> \n    <input type=\"text\" name=\"college\" required> \n \n    <br><br> \n \n    <input type=\"submit\" value=\"Submit\"> \n \n</form> \n \n</body> \n</html>"
      },
      {
        "filename": "college.php",
        "language": "php",
        "code": "<?php \n \n$college = trim($_POST['college']); \n \n// Number of characters \n$characters = strlen($college); \n \n// Convert string into words \n$words = preg_split('/\\s+/', $college); \n \n// Get last word \n$lastWord = end($words); \n \necho \"<h2>College Details</h2>\"; \n \necho \"College Name: \" . $college . \"<br>\"; \necho \"Number of Characters: \" . $characters . \"<br>\"; \n \n// Case-insensitive check \nif (strcasecmp($lastWord, \"college\") == 0) { \n \n    echo \"Last word is 'college'.<br>\"; \n \n    // Replace last occurrence of college \n    $newCollege = preg_replace( \n        '/college$/i', \n        'university', \n        $college \n    ); \n \n    echo \"After Replacement: \" . $newCollege; \n \n} else { \n \n    echo \"Last word is not 'college'.<br>\"; \n    echo \"No replacement required.\"; \n \n} \n \n?>"
      }
    ]
  },
  {
    "id": "php-4",
    "number": "4",
    "definition": "Remember the username even after the browser is closed and reopened by persisting it in a cookie valid for 1 day.",
    "language": "php",
    "files": [
      {
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html> \n<html> \n<head> \n    <title>Cookie Example</title> \n</head> \n<body> \n \n<h2>Login Form</h2> \n \n<form method=\"post\" action=\"first.php\"> \n \n    <label>Username:</label> \n    <input type=\"text\" name=\"username\" required> \n \n    <br><br> \n \n    <label>Password:</label> \n    <input type=\"password\" name=\"password\" required> \n \n    <br><br> \n \n    <input type=\"submit\" value=\"Login\"> \n \n</form> \n \n</body> \n</html>"
      },
      {
        "filename": "first.php",
        "language": "php",
        "code": "<?php \n \n$username = $_POST['username']; \n \n// Cookie valid for 1 day \nsetcookie(\"username\", $username, time() + (24 * 60 * 60), \"/\"); \n \necho \"<h2>Hello \" . htmlspecialchars($username) . \"</h2>\"; \n \necho \"<p>Your username has been stored in a cookie for 1 day.</p>\"; \n \necho '<a href=\"second.php\">Check Cookie</a>'; \n \n?>"
      },
      {
        "filename": "second.php",
        "language": "php",
        "code": "<?php \n \nif (isset($_COOKIE['username'])) { \n \n    $username = $_COOKIE['username']; \n \n    echo \"<h2>Hello \" . htmlspecialchars($username) . \n         \", your cookie is still active!</h2>\"; \n \n} else { \n \n    echo \"<h2>Cookie has expired or does not exist.</h2>\"; \n \n} \n \n?>"
      }
    ]
  },
  {
    "id": "php-5",
    "number": "5",
    "definition": "Remember the username while the browser session is active without permanently storing it like a 1-day cookie.",
    "language": "php",
    "files": [
      {
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html> \n<html> \n<head> \n    <title>Session Example</title> \n</head> \n<body> \n \n<h2>Login Form</h2> \n \n<form method=\"post\" action=\"first.php\"> \n \n    <label>Username:</label> \n    <input type=\"text\" name=\"username\" required> \n \n    <br><br> \n \n    <label>Password:</label> \n    <input type=\"password\" name=\"password\" required> \n \n    <br><br> \n \n    <input type=\"submit\" value=\"Login\"> \n \n</form> \n \n</body> \n</html>"
      },
      {
        "filename": "first.php",
        "language": "php",
        "code": "<?php \n \nsession_start(); \n \n$username = $_POST['username']; \n \n$_SESSION['username'] = $username; \n \necho \"<h2>Hello \" . htmlspecialchars($username) . \"</h2>\"; \n \necho \"<p>Your session has been started.</p>\"; \n \necho '<a href=\"second.php\">Check Session</a>'; \n \n?>"
      },
      {
        "filename": "second.php",
        "language": "php",
        "code": "<?php \n \nsession_start(); \n \nif (isset($_SESSION['username'])) { \n \n    $username = $_SESSION['username']; \n \n    echo \"<h2>Hello \" . htmlspecialchars($username) . \n         \", your session is active!</h2>\"; \n \n} else { \n \n    echo \"<h2>Session is not defined.</h2>\"; \n \n} \n \n?>"
      }
    ]
  },
  {
    "id": "php-6",
    "number": "6",
    "definition": "Manage a text file log.txt with operations for append, display/search, and delete using an HTML form interface.",
    "language": "php",
    "files": [
      {
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html> \n<html> \n<head> \n    <title>Visitor Log</title> \n</head> \n<body> \n \n<h2>Visitor Log</h2> \n \n<form method=\"post\" action=\"first.php\"> \n \n    <label>Visitor Name:</label> \n    <input type=\"text\" name=\"name\"> \n \n    <br><br> \n \n    <label>Select Operation:</label> \n \n    <select name=\"operation\"> \n \n        <option value=\"append\">Append</option> \n        <option value=\"display\">Display</option> \n        <option value=\"delete\">Delete File</option> \n \n    </select> \n \n    <br><br> \n \n    <input type=\"submit\" value=\"Submit\"> \n \n</form> \n \n</body> \n</html>"
      },
      {
        "filename": "first.php",
        "language": "php",
        "code": "<?php \n \n$file = \"log.txt\"; \n \n$operation = $_POST['operation']; \n \nif ($operation == \"append\") { \n \n    $name = trim($_POST['name']); \n \n    if ($name != \"\") { \n \n        // Open file in append mode \n        $fp = fopen($file, \"a\"); \n \n        // Write visitor name \n        fwrite($fp, $name . PHP_EOL); \n \n        fclose($fp); \n \n        echo \"<h3>Visitor name added successfully.</h3>\"; \n \n    } else { \n \n        echo \"<h3>Please enter visitor name.</h3>\"; \n \n    } \n \n} elseif ($operation == \"display\") { \n \n    if (file_exists($file)) { \n \n        $fp = fopen($file, \"r\"); \n \n        echo \"<h2>Visitor List</h2>\"; \n \n        echo \"<table border='1' cellpadding='10'>\"; \n        echo \"<tr><th>No.</th><th>Visitor Name</th></tr>\"; \n \n        $count = 1; \n \n        while (($line = fgets($fp)) !== false) { \n \n            echo \"<tr>\"; \n            echo \"<td>\" . $count . \"</td>\"; \n            echo \"<td>\" . htmlspecialchars(trim($line)) . \"</td>\"; \n            echo \"</tr>\"; \n \n            $count++; \n        } \n \n        echo \"</table>\"; \n \n        fclose($fp); \n \n    } else { \n \n        echo \"<h3>Log file does not exist.</h3>\"; \n \n    } \n \n} elseif ($operation == \"delete\") { \n \n    if (file_exists($file)) { \n \n        unlink($file); \n \n        echo \"<h3>Log file deleted successfully.</h3>\"; \n \n    } else { \n \n        echo \"<h3>Log file does not exist.</h3>\"; \n \n    } \n \n} \n \n?>"
      },
      {
        "filename": "log.txt",
        "language": "text",
        "code": "# Visitor log text file (created/appended by first.php)\nRahul Patel\nMehul Shah\nPooja Dave"
      }
    ]
  },
  {
    "id": "php-7",
    "number": "7",
    "definition": "Read student enrolment number and profile picture from a multipart HTML form, rename the image using the enrolment number, and store it in the htdocs/images folder.",
    "language": "php",
    "files": [
      {
        "filename": "index.html",
        "language": "html",
        "code": "<!DOCTYPE html> \n<html> \n<head> \n    <title>Profile Picture Upload</title> \n</head> \n<body> \n \n<h2>Student Profile Picture</h2> \n \n<form method=\"post\" \n      action=\"upload.php\" \n      enctype=\"multipart/form-data\"> \n \n    <label>Enrolment Number:</label> \n    <input type=\"text\" name=\"enrolment\" required> \n \n    <br><br> \n \n    <label>Profile Picture:</label> \n    <input type=\"file\" \n           name=\"profile\" \n           accept=\"image/*\" \n           required> \n \n    <br><br> \n \n    <input type=\"submit\" value=\"Upload\"> \n \n</form> \n \n</body> \n</html>"
      },
      {
        "filename": "upload.php",
        "language": "php",
        "code": "<?php \n \n$enrolment = $_POST['enrolment']; \n \n$fileName = $_FILES['profile']['name']; \n$fileTmpName = $_FILES['profile']['tmp_name']; \n$fileError = $_FILES['profile']['error']; \n \nif ($fileError == 0) { \n \n    // Get original file extension \n    $extension = pathinfo($fileName, PATHINFO_EXTENSION); \n \n    // New file name \n    $newFileName = $enrolment . \".\" . $extension; \n \n    // Destination folder \n    $destination = \"C:/xampp/htdocs/images/\" . $newFileName; \n \n    // Move uploaded file \n    if (move_uploaded_file($fileTmpName, $destination)) { \n \n        echo \"<h2>Profile picture uploaded successfully.</h2>\"; \n \n        echo \"Enrolment Number: \" . \n             htmlspecialchars($enrolment) . \"<br>\"; \n \n        echo \"File Name: \" . \n             htmlspecialchars($newFileName); \n \n    } else { \n \n        echo \"<h2>File upload failed.</h2>\"; \n \n    } \n \n} else { \n \n    echo \"<h2>Error while uploading file.</h2>\"; \n \n} \n \n?>"
      }
    ]
  },
  {
    "id": "php-8",
    "number": "8",
    "definition": "Create a Student class with public properties, constructor, private calc() and res() methods, private result properties, and a public disp() method to calculate student percentage and pass/fail status.",
    "language": "php",
    "files": [
      {
        "filename": "student.php",
        "language": "php",
        "code": "<?php \n \nclass Student \n{ \n    // Public properties \n    public $enrolment_no; \n    public $name; \n    public $marks; \n \n    // Private properties \n    private $total; \n    private $perc; \n    private $result; \n \n    // Constructor \n    public function __construct($enrolment_no, $name, $marks) \n    { \n        $this->enrolment_no = $enrolment_no; \n        $this->name = $name; \n        $this->marks = $marks; \n    } \n \n    // Calculate total and percentage \n    private function calc() \n    { \n        $this->total = array_sum($this->marks); \n \n        $this->perc = $this->total / 5; \n    } \n \n    // Calculate result \n    private function res() \n    { \n        $this->result = \"PASS\"; \n \n        // If any subject mark is less than 35 \n        foreach ($this->marks as $mark) { \n \n            if ($mark < 35) { \n \n                $this->result = \"FAIL\"; \n                break; \n \n            } \n        } \n    } \n \n    // Display student information \n    public function disp() \n    { \n        // Call private methods \n        $this->calc(); \n        $this->res(); \n \n        echo \"<h2>Student Result</h2>\"; \n \n        echo \"<table border='1' cellpadding='10'>\"; \n \n        echo \"<tr>\"; \n        echo \"<th>Enrolment No.</th>\"; \n        echo \"<td>\" . htmlspecialchars($this->enrolment_no) . \"</td>\"; \n        echo \"</tr>\"; \n \n        echo \"<tr>\"; \n        echo \"<th>Name</th>\"; \n        echo \"<td>\" . htmlspecialchars($this->name) . \"</td>\"; \n        echo \"</tr>\"; \n \n        echo \"<tr>\"; \n        echo \"<th>Subject 1</th>\"; \n        echo \"<td>\" . $this->marks[0] . \"</td>\"; \n        echo \"</tr>\"; \n \n        echo \"<tr>\"; \n        echo \"<th>Subject 2</th>\"; \n        echo \"<td>\" . $this->marks[1] . \"</td>\"; \n        echo \"</tr>\"; \n \n        echo \"<tr>\"; \n        echo \"<th>Subject 3</th>\"; \n        echo \"<td>\" . $this->marks[2] . \"</td>\"; \n        echo \"</tr>\"; \n \n        echo \"<tr>\"; \n        echo \"<th>Subject 4</th>\"; \n        echo \"<td>\" . $this->marks[3] . \"</td>\"; \n        echo \"</tr>\"; \n \n        echo \"<tr>\"; \n        echo \"<th>Subject 5</th>\"; \n        echo \"<td>\" . $this->marks[4] . \"</td>\"; \n        echo \"</tr>\"; \n \n        echo \"<tr>\"; \n        echo \"<th>Total</th>\"; \n        echo \"<td>\" . $this->total . \"</td>\"; \n        echo \"</tr>\"; \n \n        echo \"<tr>\"; \n        echo \"<th>Percentage</th>\"; \n        echo \"<td>\" . $this->perc . \"%</td>\"; \n        echo \"</tr>\"; \n \n        echo \"<tr>\"; \n        echo \"<th>Result</th>\"; \n        echo \"<td>\" . $this->result . \"</td>\"; \n        echo \"</tr>\"; \n \n        echo \"</table>\"; \n    } \n} \n \n// Create object \n$student = new Student( \n    \"SPU001\", \n    \"Rahul Patel\", \n    array(78, 85, 69, 72, 88) \n); \n \n// Display result \n$student->disp(); \n \n?>"
      }
    ]
  },
  {
    "id": "php-9-setup",
    "number": "9 (Setup)",
    "definition": "Create the LYBCA database, define the employee table schema, and configure the common db.php connection file used across all Program 9 database operations.",
    "language": "php",
    "files": [
      {
        "filename": "setup.sql",
        "language": "sql",
        "code": "-- Step 1 \u2014 Create Database and Table in phpMyAdmin or MySQL CLI\nCREATE DATABASE LYBCA;\n\nUSE LYBCA;\n\nCREATE TABLE employee \n( \n    Empid INT(3) PRIMARY KEY, \n    Ename VARCHAR(35), \n    Deptcode CHAR(1), \n    JoiningDate DATE, \n    Gender CHAR(1) \n);"
      },
      {
        "filename": "db.php",
        "language": "php",
        "code": "<?php \n \n$conn = mysqli_connect( \n    \"localhost\", \n    \"root\", \n    \"\", \n    \"LYBCA\" \n); \n \nif (!$conn) { \n \n    die(\"Database connection failed: \" . mysqli_connect_error()); \n \n} \n \n?>"
      }
    ]
  },
  {
    "id": "php-9a",
    "number": "9(A)",
    "definition": "Read employee details (ID, Name, Department radio button, Joining Date, Gender dropdown) through an HTML form and insert the record into the database.",
    "language": "php",
    "files": [
      {
        "filename": "insert.html",
        "language": "html",
        "code": "<!DOCTYPE html> \n<html> \n<head> \n    <title>Insert Employee</title> \n</head> \n<body> \n \n<h2>Employee Registration</h2> \n \n<form method=\"post\" action=\"insert.php\"> \n \n    Employee ID: \n    <input type=\"text\" name=\"empid\" required> \n    <br><br> \n \n    Employee Name: \n    <input type=\"text\" name=\"ename\" required> \n    <br><br> \n \n    Department: \n    <input type=\"radio\" name=\"deptcode\" value=\"A\"> Admin \n    <input type=\"radio\" name=\"deptcode\" value=\"S\"> Sales \n    <input type=\"radio\" name=\"deptcode\" value=\"F\"> Finance \n    <br><br> \n \n    Joining Date: \n    <input type=\"date\" name=\"joiningdate\" required> \n    <br><br> \n \n    Gender: \n    <select name=\"gender\"> \n \n        <option value=\"M\">Male</option> \n        <option value=\"F\">Female</option> \n \n    </select> \n \n    <br><br> \n \n    <input type=\"submit\" value=\"Insert\"> \n \n</form> \n \n</body> \n</html>"
      },
      {
        "filename": "insert.php",
        "language": "php",
        "code": "<?php \n \ninclude \"db.php\"; \n \n$empid = $_POST['empid']; \n$ename = $_POST['ename']; \n$deptcode = $_POST['deptcode']; \n$joiningdate = $_POST['joiningdate']; \n$gender = $_POST['gender']; \n \n$sql = \"INSERT INTO employee \n        VALUES \n        ('$empid', '$ename', '$deptcode', '$joiningdate', '$gender')\"; \n \nif (mysqli_query($conn, $sql)) { \n \n    echo \"<h3>Employee record inserted successfully.</h3>\"; \n \n} else { \n \n    echo \"Error: \" . mysqli_error($conn); \n \n} \n \nmysqli_close($conn); \n \n?>"
      }
    ]
  },
  {
    "id": "php-9b",
    "number": "9(B)",
    "definition": "Read Employee ID from a form and display 'Record exists' or 'Record does not exist' using mysqli_num_rows().",
    "language": "php",
    "files": [
      {
        "filename": "check.html",
        "language": "html",
        "code": "<!DOCTYPE html> \n<html> \n<head> \n    <title>Check Employee</title> \n</head> \n<body> \n \n<h2>Check Employee Record</h2> \n \n<form method=\"post\" action=\"check.php\"> \n \n    Employee ID: \n    <input type=\"text\" name=\"empid\" required> \n \n    <br><br> \n \n    <input type=\"submit\" value=\"Check\"> \n \n</form> \n \n</body> \n</html>"
      },
      {
        "filename": "check.php",
        "language": "php",
        "code": "<?php \n \ninclude \"db.php\"; \n \n$empid = $_POST['empid']; \n \n$sql = \"SELECT * FROM employee WHERE Empid = '$empid'\"; \n \n$result = mysqli_query($conn, $sql); \n \nif (mysqli_num_rows($result) > 0) { \n \n    echo \"<h3>Record exists</h3>\"; \n \n} else { \n \n    echo \"<h3>Record does not exist</h3>\"; \n \n} \n \nmysqli_close($conn); \n \n?>"
      }
    ]
  },
  {
    "id": "php-9c",
    "number": "9(C)",
    "definition": "Check if Employee ID already exists: if yes, display the record before and after updating with the new values; otherwise, insert as a new record.",
    "language": "php",
    "files": [
      {
        "filename": "update.html",
        "language": "html",
        "code": "<!DOCTYPE html> \n<html> \n<head> \n    <title>Insert or Update</title> \n</head> \n<body> \n \n<h2>Employee Details</h2> \n \n<form method=\"post\" action=\"update.php\"> \n \n    Employee ID: \n    <input type=\"text\" name=\"empid\" required> \n    <br><br> \n \n    Employee Name: \n    <input type=\"text\" name=\"ename\" required> \n    <br><br> \n \n    Department: \n \n    <input type=\"radio\" name=\"deptcode\" value=\"A\"> Admin \n    <input type=\"radio\" name=\"deptcode\" value=\"S\"> Sales \n    <input type=\"radio\" name=\"deptcode\" value=\"F\"> Finance \n \n    <br><br> \n \n    Joining Date: \n    <input type=\"date\" name=\"joiningdate\" required> \n    <br><br> \n \n    Gender: \n \n    <select name=\"gender\"> \n        <option value=\"M\">Male</option> \n        <option value=\"F\">Female</option> \n    </select> \n \n    <br><br> \n \n    <input type=\"submit\" value=\"Submit\"> \n \n</form> \n \n</body> \n</html>"
      },
      {
        "filename": "update.php",
        "language": "php",
        "code": "<?php \n \ninclude \"db.php\"; \n \n$empid = $_POST['empid']; \n$ename = $_POST['ename']; \n$deptcode = $_POST['deptcode']; \n$joiningdate = $_POST['joiningdate']; \n$gender = $_POST['gender']; \n \n// Check record \n$sql = \"SELECT * FROM employee WHERE Empid='$empid'\"; \n \n$result = mysqli_query($conn, $sql); \n \nif (mysqli_num_rows($result) > 0) { \n \n    // Display BEFORE \n    $row = mysqli_fetch_assoc($result); \n \n    echo \"<h2>Record Before Updating</h2>\"; \n \n    echo \"Employee ID: \" . $row['Empid'] . \"<br>\"; \n    echo \"Name: \" . $row['Ename'] . \"<br>\"; \n    echo \"Department: \" . $row['Deptcode'] . \"<br>\"; \n    echo \"Joining Date: \" . $row['JoiningDate'] . \"<br>\"; \n    echo \"Gender: \" . $row['Gender'] . \"<br><br>\"; \n \n    // Update \n    $sql = \"UPDATE employee SET \n            Ename='$ename', \n            Deptcode='$deptcode', \n            JoiningDate='$joiningdate', \n            Gender='$gender' \n            WHERE Empid='$empid'\"; \n \n    mysqli_query($conn, $sql); \n \n    // Display AFTER \n    $sql = \"SELECT * FROM employee WHERE Empid='$empid'\"; \n \n    $result = mysqli_query($conn, $sql); \n \n    $row = mysqli_fetch_assoc($result); \n \n    echo \"<h2>Record After Updating</h2>\"; \n \n    echo \"Employee ID: \" . $row['Empid'] . \"<br>\"; \n    echo \"Name: \" . $row['Ename'] . \"<br>\"; \n    echo \"Department: \" . $row['Deptcode'] . \"<br>\"; \n    echo \"Joining Date: \" . $row['JoiningDate'] . \"<br>\"; \n    echo \"Gender: \" . $row['Gender'] . \"<br>\"; \n \n} else { \n \n    // Insert new record \n    $sql = \"INSERT INTO employee \n            VALUES \n            ('$empid','$ename','$deptcode','$joiningdate','$gender')\"; \n \n    mysqli_query($conn, $sql); \n \n    echo \"<h3>New record inserted successfully.</h3>\"; \n} \n \nmysqli_close($conn); \n \n?>"
      }
    ]
  },
  {
    "id": "php-9d",
    "number": "9(D)",
    "definition": "Fetch the first record from the employee table using SQL LIMIT 1 and display it in a read-only form layout.",
    "language": "php",
    "files": [
      {
        "filename": "firstrecord.php",
        "language": "php",
        "code": "<?php \n \ninclude \"db.php\"; \n \n$sql = \"SELECT * FROM employee LIMIT 1\"; \n \n$result = mysqli_query($conn, $sql); \n \nif (mysqli_num_rows($result) > 0) { \n \n    $row = mysqli_fetch_assoc($result); \n \n    echo \"<h2>First Employee Record</h2>\"; \n \n    echo \"Employee ID: \" . $row['Empid'] . \"<br><br>\"; \n \n    echo \"Employee Name: \" . \n         $row['Ename'] . \"<br><br>\"; \n \n    echo \"Department: \" . \n         $row['Deptcode'] . \"<br><br>\"; \n \n    echo \"Joining Date: \" . \n         $row['JoiningDate'] . \"<br><br>\"; \n \n    echo \"Gender: \" . \n         $row['Gender']; \n \n} else { \n \n    echo \"No records found.\"; \n \n} \n \n?>"
      }
    ]
  },
  {
    "id": "php-9e",
    "number": "9(E)",
    "definition": "Fetch the first employee record using SQL LIMIT 1 and render it in an HTML table format.",
    "language": "php",
    "files": [
      {
        "filename": "firsttable.php",
        "language": "php",
        "code": "<?php \n \ninclude \"db.php\"; \n \n$sql = \"SELECT * FROM employee LIMIT 1\"; \n \n$result = mysqli_query($conn, $sql); \n \nif (mysqli_num_rows($result) > 0) { \n \n    $row = mysqli_fetch_assoc($result); \n \n    echo \"<h2>First Employee Record</h2>\"; \n \n    echo \"<table border='1' cellpadding='10'>\"; \n \n    echo \"<tr>\"; \n    echo \"<th>Employee ID</th>\"; \n    echo \"<th>Employee Name</th>\"; \n    echo \"<th>Department</th>\"; \n    echo \"<th>Joining Date</th>\"; \n    echo \"<th>Gender</th>\"; \n    echo \"</tr>\"; \n \n    echo \"<tr>\"; \n \n    echo \"<td>\" . $row['Empid'] . \"</td>\"; \n    echo \"<td>\" . $row['Ename'] . \"</td>\"; \n    echo \"<td>\" . $row['Deptcode'] . \"</td>\"; \n    echo \"<td>\" . $row['JoiningDate'] . \"</td>\"; \n    echo \"<td>\" . $row['Gender'] . \"</td>\"; \n \n    echo \"</tr>\"; \n \n    echo \"</table>\"; \n \n} else { \n \n    echo \"No records found.\"; \n \n} \n \n?>"
      }
    ]
  },
  {
    "id": "php-9f",
    "number": "9(F)",
    "definition": "Select gender (Male or Female) using an HTML form, filter matching employee records in an HTML table, and calculate and display the total count.",
    "language": "php",
    "files": [
      {
        "filename": "gender.html",
        "language": "html",
        "code": "<!DOCTYPE html> \n<html> \n<head> \n    <title>Employee Gender</title> \n</head> \n<body> \n \n<h2>Employee Details by Gender</h2> \n \n<form method=\"post\" action=\"gender.php\"> \n \n    Select Gender: \n \n    <select name=\"gender\"> \n \n        <option value=\"M\">Male</option> \n        <option value=\"F\">Female</option> \n \n    </select> \n \n    <br><br> \n \n    <input type=\"submit\" value=\"Display\"> \n \n</form> \n \n</body> \n</html>"
      },
      {
        "filename": "gender.php",
        "language": "php",
        "code": "<?php \n \ninclude \"db.php\"; \n \n$gender = $_POST['gender']; \n \n$sql = \"SELECT * FROM employee \n        WHERE Gender='$gender'\"; \n \n$result = mysqli_query($conn, $sql); \n \necho \"<h2>Employee Details</h2>\"; \n \necho \"<table border='1' cellpadding='10'>\"; \n \necho \"<tr>\"; \necho \"<th>Emp ID</th>\"; \necho \"<th>Name</th>\"; \necho \"<th>Department</th>\"; \necho \"<th>Joining Date</th>\"; \necho \"<th>Gender</th>\"; \necho \"</tr>\"; \n \n$count = 0; \n \nwhile ($row = mysqli_fetch_assoc($result)) { \n \n    echo \"<tr>\"; \n \n    echo \"<td>\" . $row['Empid'] . \"</td>\"; \n    echo \"<td>\" . $row['Ename'] . \"</td>\"; \n    echo \"<td>\" . $row['Deptcode'] . \"</td>\"; \n    echo \"<td>\" . $row['JoiningDate'] . \"</td>\"; \n    echo \"<td>\" . $row['Gender'] . \"</td>\"; \n \n    echo \"</tr>\"; \n \n    $count++; \n} \n \necho \"</table>\"; \n \necho \"<h3>Total Employees: \" . $count . \"</h3>\"; \n \nmysqli_close($conn); \n \n?>"
      }
    ]
  },
  {
    "id": "php-9g",
    "number": "9(G)",
    "definition": "Display all records before inserting, insert the new employee record, and display all records after insertion with the newly added row highlighted with a pink background.",
    "language": "php",
    "files": [
      {
        "filename": "insert_highlight.html",
        "language": "html",
        "code": "<!DOCTYPE html> \n<html> \n<head> \n    <title>Employee Insert</title> \n</head> \n<body> \n \n<h2>Insert Employee</h2> \n \n<form method=\"post\" action=\"insert_highlight.php\"> \n \n    Employee ID: \n    <input type=\"text\" name=\"empid\" required> \n    <br><br> \n \n    Employee Name: \n    <input type=\"text\" name=\"ename\" required> \n    <br><br> \n \n    Department: \n \n    <input type=\"radio\" name=\"deptcode\" value=\"A\"> Admin \n    <input type=\"radio\" name=\"deptcode\" value=\"S\"> Sales \n    <input type=\"radio\" name=\"deptcode\" value=\"F\"> Finance \n \n    <br><br> \n \n    Joining Date: \n    <input type=\"date\" name=\"joiningdate\" required> \n    <br><br> \n \n    Gender: \n \n    <select name=\"gender\"> \n        <option value=\"M\">Male</option> \n        <option value=\"F\">Female</option> \n    </select> \n \n    <br><br> \n \n    <input type=\"submit\" value=\"Insert\"> \n \n</form> \n \n</body> \n</html>"
      },
      {
        "filename": "insert_highlight.php",
        "language": "php",
        "code": "<?php \n \ninclude \"db.php\"; \n \n$empid = $_POST['empid']; \n$ename = $_POST['ename']; \n$deptcode = $_POST['deptcode']; \n$joiningdate = $_POST['joiningdate']; \n$gender = $_POST['gender']; \n \n// Get records BEFORE insertion \n$before = mysqli_query($conn, \"SELECT * FROM employee\"); \n \n// Insert new record \n$sql = \"INSERT INTO employee \n        VALUES \n        ('$empid','$ename','$deptcode','$joiningdate','$gender')\"; \n \nmysqli_query($conn, $sql); \n \n// Display BEFORE table \necho \"<h2>Records Before Inserting</h2>\"; \n \necho \"<table border='1' cellpadding='10'>\"; \n \necho \"<tr> \n        <th>Emp ID</th> \n        <th>Name</th> \n        <th>Department</th> \n        <th>Joining Date</th> \n        <th>Gender</th> \n      </tr>\"; \n \nwhile ($row = mysqli_fetch_assoc($before)) { \n \n    echo \"<tr>\"; \n \n    echo \"<td>\" . $row['Empid'] . \"</td>\"; \n    echo \"<td>\" . $row['Ename'] . \"</td>\"; \n    echo \"<td>\" . $row['Deptcode'] . \"</td>\"; \n    echo \"<td>\" . $row['JoiningDate'] . \"</td>\"; \n    echo \"<td>\" . $row['Gender'] . \"</td>\"; \n \n    echo \"</tr>\"; \n} \n \necho \"</table>\"; \n \n \n// Get records AFTER insertion \n$after = mysqli_query($conn, \"SELECT * FROM employee\"); \n \necho \"<h2>Records After Inserting</h2>\"; \n \necho \"<table border='1' cellpadding='10'>\"; \n \necho \"<tr> \n        <th>Emp ID</th> \n        <th>Name</th> \n        <th>Department</th> \n        <th>Joining Date</th> \n        <th>Gender</th> \n      </tr>\"; \n \nwhile ($row = mysqli_fetch_assoc($after)) { \n \n    if ($row['Empid'] == $empid) { \n \n        echo \"<tr style='background-color:pink'>\"; \n \n    } else { \n \n        echo \"<tr>\"; \n \n    } \n \n    echo \"<td>\" . $row['Empid'] . \"</td>\"; \n    echo \"<td>\" . $row['Ename'] . \"</td>\"; \n    echo \"<td>\" . $row['Deptcode'] . \"</td>\"; \n    echo \"<td>\" . $row['JoiningDate'] . \"</td>\"; \n    echo \"<td>\" . $row['Gender'] . \"</td>\"; \n \n    echo \"</tr>\"; \n} \n \necho \"</table>\"; \n \nmysqli_close($conn); \n \n?>"
      }
    ]
  },
  {
    "id": "php-9h",
    "number": "9(H)",
    "definition": "Insert a new record when the Employee ID does not already exist; otherwise display the existing employee's details in an HTML table without overwriting.",
    "language": "php",
    "files": [
      {
        "filename": "insert_or_display.html",
        "language": "html",
        "code": "<!DOCTYPE html> \n<html> \n<head> \n    <title>Employee Record</title> \n</head> \n<body> \n \n<h2>Employee Details</h2> \n \n<form method=\"post\" action=\"insert_or_display.php\"> \n \n    Employee ID: \n    <input type=\"text\" name=\"empid\" required> \n    <br><br> \n \n    Employee Name: \n    <input type=\"text\" name=\"ename\" required> \n    <br><br> \n \n    Department: \n \n    <input type=\"radio\" name=\"deptcode\" value=\"A\"> Admin \n    <input type=\"radio\" name=\"deptcode\" value=\"S\"> Sales \n    <input type=\"radio\" name=\"deptcode\" value=\"F\"> Finance \n \n    <br><br> \n \n    Joining Date: \n    <input type=\"date\" name=\"joiningdate\" required> \n    <br><br> \n \n    Gender: \n \n    <select name=\"gender\"> \n \n        <option value=\"M\">Male</option> \n        <option value=\"F\">Female</option> \n \n    </select> \n \n    <br><br> \n \n    <input type=\"submit\" value=\"Submit\"> \n \n</form> \n \n</body> \n</html>"
      },
      {
        "filename": "insert_or_display.php",
        "language": "php",
        "code": "<?php \n \ninclude \"db.php\"; \n \n$empid = $_POST['empid']; \n$ename = $_POST['ename']; \n$deptcode = $_POST['deptcode']; \n$joiningdate = $_POST['joiningdate']; \n$gender = $_POST['gender']; \n \n$sql = \"SELECT * FROM employee \n        WHERE Empid='$empid'\"; \n \n$result = mysqli_query($conn, $sql); \n \nif (mysqli_num_rows($result) > 0) { \n \n    // Existing record \n    $row = mysqli_fetch_assoc($result); \n \n    echo \"<h2>Record Already Exists</h2>\"; \n \n    echo \"<table border='1' cellpadding='10'>\"; \n \n    echo \"<tr>\"; \n    echo \"<th>Employee ID</th>\"; \n    echo \"<th>Name</th>\"; \n    echo \"<th>Department</th>\"; \n    echo \"<th>Joining Date</th>\"; \n    echo \"<th>Gender</th>\"; \n    echo \"</tr>\"; \n \n    echo \"<tr>\"; \n \n    echo \"<td>\" . $row['Empid'] . \"</td>\"; \n    echo \"<td>\" . $row['Ename'] . \"</td>\"; \n    echo \"<td>\" . $row['Deptcode'] . \"</td>\"; \n    echo \"<td>\" . $row['JoiningDate'] . \"</td>\"; \n    echo \"<td>\" . $row['Gender'] . \"</td>\"; \n \n    echo \"</tr>\"; \n \n    echo \"</table>\"; \n \n} else { \n \n    // Insert new record \n    $sql = \"INSERT INTO employee \n            VALUES \n            ('$empid','$ename','$deptcode', \n             '$joiningdate','$gender')\"; \n \n    if (mysqli_query($conn, $sql)) { \n \n        echo \"<h3>New employee record inserted successfully.</h3>\"; \n \n    } else { \n \n        echo \"Error: \" . mysqli_error($conn); \n \n    } \n \n} \n \nmysqli_close($conn); \n \n?>"
      }
    ]
  },
  {
    "id": "php-9i",
    "number": "9(I)",
    "definition": "Display two separate HTML tables\u2014one for male employees and another for female employees\u2014including department codes and a summary total count.",
    "language": "php",
    "files": [
      {
        "filename": "gender_tables.php",
        "language": "php",
        "code": "<?php \n \ninclude \"db.php\"; \n \n// Male employees \n$male = mysqli_query( \n    $conn, \n    \"SELECT * FROM employee WHERE Gender='M'\" \n); \n \necho \"<h2>Male Employees</h2>\"; \n \necho \"<table border='1' cellpadding='10'>\"; \n \necho \"<tr> \n        <th>Employee ID</th> \n        <th>Name</th> \n        <th>Department</th> \n        <th>Joining Date</th> \n        <th>Gender</th> \n      </tr>\"; \n \n$maleCount = 0; \n \nwhile ($row = mysqli_fetch_assoc($male)) { \n \n    echo \"<tr>\"; \n \n    echo \"<td>\" . $row['Empid'] . \"</td>\"; \n    echo \"<td>\" . $row['Ename'] . \"</td>\"; \n    echo \"<td>\" . $row['Deptcode'] . \"</td>\"; \n    echo \"<td>\" . $row['JoiningDate'] . \"</td>\"; \n    echo \"<td>\" . $row['Gender'] . \"</td>\"; \n \n    echo \"</tr>\"; \n \n    $maleCount++; \n} \n \necho \"</table>\"; \n \necho \"<h3>Total Male Employees: \" . \n     $maleCount . \"</h3>\"; \n \n \n// Female employees \n$female = mysqli_query( \n    $conn, \n    \"SELECT * FROM employee WHERE Gender='F'\" \n); \n \necho \"<h2>Female Employees</h2>\"; \n \necho \"<table border='1' cellpadding='10'>\"; \n \necho \"<tr> \n        <th>Employee ID</th> \n        <th>Name</th> \n        <th>Department</th> \n        <th>Joining Date</th> \n        <th>Gender</th> \n      </tr>\"; \n \n$femaleCount = 0; \n \nwhile ($row = mysqli_fetch_assoc($female)) { \n \n    echo \"<tr>\"; \n \n    echo \"<td>\" . $row['Empid'] . \"</td>\"; \n    echo \"<td>\" . $row['Ename'] . \"</td>\"; \n    echo \"<td>\" . $row['Deptcode'] . \"</td>\"; \n    echo \"<td>\" . $row['JoiningDate'] . \"</td>\"; \n    echo \"<td>\" . $row['Gender'] . \"</td>\"; \n \n    echo \"</tr>\"; \n \n    $femaleCount++; \n} \n \necho \"</table>\"; \n \necho \"<h3>Total Female Employees: \" . \n     $femaleCount . \"</h3>\"; \n \n \n// Summary \necho \"<h2>Summary</h2>\"; \n \necho \"Male Employees: \" . $maleCount . \"<br>\"; \necho \"Female Employees: \" . $femaleCount . \"<br>\"; \necho \"Total Employees: \" . \n     ($maleCount + $femaleCount); \n \nmysqli_close($conn); \n \n?>"
      }
    ]
  },
  {
    "id": "php-9j",
    "number": "9(J)",
    "definition": "Enter Employee ID, fetch the employee record into an HTML form with pre-populated fields (making ID read-only), and update the database when the form is submitted.",
    "language": "php",
    "files": [
      {
        "filename": "edit.html",
        "language": "html",
        "code": "<!DOCTYPE html> \n<html> \n<head> \n    <title>Edit Employee</title> \n</head> \n<body> \n \n<h2>Search Employee</h2> \n \n<form method=\"post\" action=\"edit.php\"> \n \n    Employee ID: \n    <input type=\"text\" name=\"empid\" required> \n \n    <br><br> \n \n    <input type=\"submit\" value=\"Search\"> \n \n</form> \n \n</body> \n</html>"
      },
      {
        "filename": "edit.php",
        "language": "php",
        "code": "<?php \n \ninclude \"db.php\"; \n \n$empid = $_POST['empid']; \n \n$sql = \"SELECT * FROM employee \n        WHERE Empid='$empid'\"; \n \n$result = mysqli_query($conn, $sql); \n \nif (mysqli_num_rows($result) > 0) { \n \n    $row = mysqli_fetch_assoc($result); \n \n?> \n \n<h2>Edit Employee Details</h2> \n \n<form method=\"post\" action=\"save.php\"> \n \n    Employee ID: \n \n    <input type=\"text\" \n           name=\"empid\" \n           value=\"<?php echo $row['Empid']; ?>\" \n           readonly> \n \n    <br><br> \n \n    Employee Name: \n \n    <input type=\"text\" \n           name=\"ename\" \n           value=\"<?php echo $row['Ename']; ?>\"> \n \n    <br><br> \n \n    Department: \n \n    <input type=\"radio\" \n           name=\"deptcode\" \n           value=\"A\" \n           <?php if ($row['Deptcode'] == 'A') echo \"checked\"; ?>> \n    Admin \n \n    <input type=\"radio\" \n           name=\"deptcode\" \n           value=\"S\" \n           <?php if ($row['Deptcode'] == 'S') echo \"checked\"; ?>> \n    Sales \n \n    <input type=\"radio\" \n           name=\"deptcode\" \n           value=\"F\" \n           <?php if ($row['Deptcode'] == 'F') echo \"checked\"; ?>> \n    Finance \n \n    <br><br> \n \n    Joining Date: \n \n    <input type=\"date\" \n           name=\"joiningdate\" \n           value=\"<?php echo $row['JoiningDate']; ?>\"> \n \n    <br><br> \n \n    Gender: \n \n    <select name=\"gender\"> \n \n        <option value=\"M\" \n        <?php if ($row['Gender'] == 'M') echo \"selected\"; ?>> \n        Male \n        </option> \n \n        <option value=\"F\" \n        <?php if ($row['Gender'] == 'F') echo \"selected\"; ?>> \n        Female \n        </option> \n \n    </select> \n \n    <br><br> \n \n    <input type=\"submit\" value=\"Update\"> \n \n</form> \n \n<?php \n \n} else { \n \n    echo \"<h3>Employee record not found.</h3>\"; \n \n} \n \nmysqli_close($conn); \n \n?>"
      },
      {
        "filename": "save.php",
        "language": "php",
        "code": "<?php \n \ninclude \"db.php\"; \n \n$empid = $_POST['empid']; \n$ename = $_POST['ename']; \n$deptcode = $_POST['deptcode']; \n$joiningdate = $_POST['joiningdate']; \n$gender = $_POST['gender']; \n \n$sql = \"UPDATE employee SET \n \n        Ename='$ename', \n        Deptcode='$deptcode', \n        JoiningDate='$joiningdate', \n        Gender='$gender' \n \n        WHERE Empid='$empid'\"; \n \nif (mysqli_query($conn, $sql)) { \n \n    echo \"<h3>Employee record updated successfully.</h3>\"; \n \n} else { \n \n    echo \"Error: \" . mysqli_error($conn); \n \n} \n \nmysqli_close($conn); \n \n?>"
      }
    ]
  },
  {
    "id": "php-9k",
    "number": "9(K)",
    "definition": "Enter Employee ID, display the employee record in an HTML table, provide a Delete button with hidden empid input, and delete the record upon confirmation.",
    "language": "php",
    "files": [
      {
        "filename": "delete.html",
        "language": "html",
        "code": "<!DOCTYPE html> \n<html> \n<head> \n    <title>Delete Employee</title> \n</head> \n<body> \n \n<h2>Delete Employee</h2> \n \n<form method=\"post\" action=\"delete.php\"> \n \n    Employee ID: \n    <input type=\"text\" name=\"empid\" required> \n \n    <br><br> \n \n    <input type=\"submit\" value=\"Search\"> \n \n</form> \n \n</body> \n</html>"
      },
      {
        "filename": "delete.php",
        "language": "php",
        "code": "<?php \n \ninclude \"db.php\"; \n \n$empid = $_POST['empid']; \n \n$sql = \"SELECT * FROM employee \n        WHERE Empid='$empid'\"; \n \n$result = mysqli_query($conn, $sql); \n \nif (mysqli_num_rows($result) > 0) { \n \n    $row = mysqli_fetch_assoc($result); \n \n    echo \"<h2>Employee Details</h2>\"; \n \n    echo \"<table border='1' cellpadding='10'>\"; \n \n    echo \"<tr>\"; \n    echo \"<th>Employee ID</th>\"; \n    echo \"<th>Name</th>\"; \n    echo \"<th>Department</th>\"; \n    echo \"<th>Joining Date</th>\"; \n    echo \"<th>Gender</th>\"; \n    echo \"</tr>\"; \n \n    echo \"<tr>\"; \n \n    echo \"<td>\" . $row['Empid'] . \"</td>\"; \n    echo \"<td>\" . $row['Ename'] . \"</td>\"; \n    echo \"<td>\" . $row['Deptcode'] . \"</td>\"; \n    echo \"<td>\" . $row['JoiningDate'] . \"</td>\"; \n    echo \"<td>\" . $row['Gender'] . \"</td>\"; \n \n    echo \"</tr>\"; \n \n    echo \"</table>\"; \n \n    echo \"<br>\"; \n \n    echo \"<form method='post' action='confirm_delete.php'>\"; \n \n    echo \"<input type='hidden' \n                 name='empid' \n                 value='\" . $row['Empid'] . \"'>\"; \n \n    echo \"<input type='submit' \n                 value='Delete Employee'>\"; \n \n    echo \"</form>\"; \n \n} else { \n \n    echo \"<h3>Employee record not found.</h3>\"; \n \n} \n \nmysqli_close($conn); \n \n?>"
      },
      {
        "filename": "confirm_delete.php",
        "language": "php",
        "code": "<?php \n \ninclude \"db.php\"; \n \n$empid = $_POST['empid']; \n \n$sql = \"DELETE FROM employee \n        WHERE Empid='$empid'\"; \n \nif (mysqli_query($conn, $sql)) { \n \n    echo \"<h2>Employee record deleted successfully.</h2>\"; \n \n} else { \n \n    echo \"Error: \" . mysqli_error($conn); \n \n} \n \nmysqli_close($conn); \n \n?>"
      }
    ]
  }
];
