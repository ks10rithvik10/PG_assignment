export interface BattleCard {
  id: string;
  question: number;
  aim: string;
  explanation: string;
  code: string;
  output: string;
  hasImage?: boolean;
}

export interface Level {
  id: number;
  name: string;
  title: string;
  boss: string;
  bossEmoji: string;
  lore: string;
  power: string;
  powerEmoji: string;
  realm: string;
  realmEmoji: string;
  accent: string;
  cards: BattleCard[];
}

export const STUDENT = {
  name: 'KS RITHVIK',
  sapId: '590030656',
  course: 'MCA (AI & ML)',
  university: 'UPES, Dehradun',
  github: 'github.com/ks10rithvik10/PG_assignment',
};

export const LEVELS: Level[] = [
  {
    id: 1,
    name: 'Genesis Plains',
    title: 'Python Installation & Basics',
    boss: 'The Null Sentinel',
    bossEmoji: '🛡️',
    lore: 'Before the world of Syntaxia could exist, the ancient Python engine had to be awakened. The Null Sentinel guards the first spark of code — defeat it to prove you can speak the language of machines.',
    power: 'Awakening',
    powerEmoji: '✨',
    realm: 'Genesis Plains',
    realmEmoji: '🌱',
    accent: 'emerald',
    cards: [
      {
        id: '1-1',
        question: 1,
        aim: 'Install Python and understand the difference between Interactive Mode and Scripting Mode.',
        explanation: 'Python can be executed in two ways: Interactive Mode executes one command at a time, while Scripting Mode runs an entire .py file. This experiment also verifies that Python has been installed successfully.',
        code: `import sys

print("Python is installed successfully.")
print("Python Version:", sys.version)`,
        output: `Python is installed successfully.
Python Version: 3.13.14 (v3.13.14:fd17997c386, Jun 10 2026, 08:55:00) [Clang 21.0.0]`,
      },
      {
        id: '1-2',
        question: 2,
        aim: 'Write a Python program to print different strings.',
        explanation: 'The print() function displays text on the screen. The \\n escape sequence moves the cursor to the next line, allowing text to be printed on separate lines.',
        code: `print("Hello Everyone !!!")

print("Hello")
print("World")

print("Hello\\nWorld")

print("KS RITHVIK's date of birth is 23/02/2006")`,
        output: `Hello Everyone !!!
Hello
World
Hello
World
KS RITHVIK's date of birth is 23/02/2006`,
      },
      {
        id: '1-3',
        question: 3,
        aim: 'Create a variable and print its value.',
        explanation: 'A variable is used to store data in memory. Here, the variable x stores the string "Hello" and print() displays it.',
        code: `x = "Hello"

print(x)`,
        output: `Hello`,
      },
      {
        id: '1-4',
        question: 4,
        aim: 'Print different data types in Python.',
        explanation: 'Python supports multiple data types such as integers, floating-point numbers, strings, booleans, and lists. This program demonstrates each type by storing values in variables and printing them.',
        code: `integer_value = 25
float_value = 3.14
string_value = "Python Programming"
boolean_value = True
list_value = [10, 20, 30]

print("Integer:", integer_value)
print("Float:", float_value)
print("String:", string_value)
print("Boolean:", boolean_value)
print("List:", list_value)`,
        output: `Integer: 25
Float: 3.14
String: Python Programming
Boolean: True
List: [10, 20, 30]`,
      },
      {
        id: '1-5',
        question: 5,
        aim: 'Concatenate first name and last name.',
        explanation: 'String concatenation means joining two or more strings together. Here, the first name and last name are combined with a space to form the full name.',
        code: `first_name = "KS"
last_name = "RITHVIK"

full_name = first_name + " " + last_name

print(full_name)`,
        output: `KS RITHVIK`,
      },
      {
        id: '1-6',
        question: 6,
        aim: 'Print a name in the format FirstName (Nickname) LastName.',
        explanation: "Python's f-string formatting makes it easy to insert variables into a string, improving readability and making the code simpler than using multiple concatenations.",
        code: `first_name = "KS"
nickname = "Rithvik"
last_name = "R"

print(f"{first_name} ({nickname}) {last_name}")`,
        output: `KS (Rithvik) R`,
      },
      {
        id: '1-7',
        question: 7,
        aim: 'Store and display student details.',
        explanation: 'Variables are used to store personal information such as name, SAP ID, date of birth, programme, and semester. The stored values are then displayed using the print() function.',
        code: `name = "KS RITHVIK"
sap_id = "590030656"
dob = "23/02/2006"
programme = "MCA (AI & ML)"
semester = 1

print("Name:", name)
print("SAP ID:", sap_id)
print("Date of Birth:", dob)
print("Programme:", programme)
print("Semester:", semester)`,
        output: `Name: KS RITHVIK
SAP ID: 590030656
Date of Birth: 23/02/2006
Programme: MCA (AI & ML)
Semester: 1`,
      },
    ],
  },
  {
    id: 2,
    name: 'Arithmetic Arena',
    title: 'Variables, Operators & Expressions',
    boss: 'The Calculator Colossus',
    bossEmoji: '⚙️',
    lore: 'Numbers are the lifeblood of Syntaxia. The Calculator Colossus challenges you to bend arithmetic to your will — only those who master operators can unlock the power to compute anything.',
    power: 'Computation',
    powerEmoji: '➗',
    realm: 'Arithmetic Arena',
    realmEmoji: '🔢',
    accent: 'amber',
    cards: [
      {
        id: '2-1',
        question: 1,
        aim: 'Perform basic arithmetic operations on two integer numbers.',
        explanation: 'Arithmetic operators are used to perform mathematical calculations such as addition, subtraction, multiplication, and division. Two numbers are stored in variables and different operations are performed.',
        code: `x = 9
y = 7

print("Addition:", x + y)
print("Subtraction:", x - y)
print("Multiplication:", x * y)
print("Division:", x / y)`,
        output: `Addition: 16
Subtraction: 2
Multiplication: 63
Division: 1.2857142857142858`,
      },
      {
        id: '2-2',
        question: 2,
        aim: 'Calculate the area of a circle using the radius entered by the user.',
        explanation: 'The area of a circle is calculated using the formula π × r². The program accepts the radius as input and uses the math.pi constant for an accurate value of π.',
        code: `import math

radius = float(input("Enter the radius: "))

area = math.pi * radius ** 2

print("Area of the circle =", area)`,
        output: `Area of the circle = 78.53981633974483`,
      },
      {
        id: '2-3',
        question: 3,
        aim: 'Evaluate the expression (x + y)².',
        explanation: 'The program calculates the square of the sum of two numbers using arithmetic operators. First, the values are added together, and then the result is multiplied by itself.',
        code: `x = 4
y = 3

result = (x + y) * (x + y)

print("Result =", result)`,
        output: `Result = 49`,
      },
      {
        id: '2-4',
        question: 4,
        aim: 'Display the given values of two variables.',
        explanation: 'Variables are used to store values in memory. This program assigns values to two variables and prints them using the print() function.',
        code: `x = 4
y = 3

print("Value of x =", x)
print("Value of y =", y)`,
        output: `Value of x = 4
Value of y = 3`,
      },
      {
        id: '2-5',
        question: 5,
        aim: 'Display the expected and actual result of the expression (x + y)².',
        explanation: 'This program verifies the calculation by displaying both the expected result and the actual result computed by Python. It helps in checking whether the program produces the correct output.',
        code: `x = 4
y = 3

print("Expected Output:", 49)
print("Actual Output:", (x + y) * (x + y))`,
        output: `Expected Output: 49
Actual Output: 49`,
      },
    ],
  },
  {
    id: 3,
    name: 'Forked Crossroads',
    title: 'Conditional Statements',
    boss: 'The Bifurcation Wraith',
    bossEmoji: '🔀',
    lore: 'At the crossroads of choice, the Bifurcation Wraith tests your ability to decide. Every if, elif, and else is a path — choose wrong and the program crashes into the void.',
    power: 'Decision',
    powerEmoji: '⚖️',
    realm: 'Forked Crossroads',
    realmEmoji: '🛤️',
    accent: 'rose',
    cards: [
      {
        id: '3-1',
        question: 1,
        aim: 'Check whether a given number is divisible by both 3 and 5.',
        explanation: 'This program uses the if statement along with the logical and operator. A number is divisible by both 3 and 5 only if both conditions are true.',
        code: `num = 45

if num % 3 == 0 and num % 5 == 0:
    print(num, "is divisible by both 3 and 5")
else:
    print(num, "is not divisible by both 3 and 5")`,
        output: `45 is divisible by both 3 and 5`,
      },
      {
        id: '3-2',
        question: 2,
        aim: 'Check whether a given number is a multiple of 5.',
        explanation: 'The modulus (%) operator returns the remainder after division. If the remainder is 0, then the number is a multiple of 5.',
        code: `num = 37

if num % 5 == 0:
    print(num, "is a multiple of 5")
else:
    print(num, "is not a multiple of 5")`,
        output: `37 is not a multiple of 5`,
      },
      {
        id: '3-3',
        question: 3,
        aim: 'Find the greatest among two numbers.',
        explanation: 'The program compares two numbers using if, elif, and else. It displays the larger number, and if both numbers are the same, it prints that the numbers are equal.',
        code: `a = 15
b = 15

if a > b:
    print("Greatest number is", a)
elif b > a:
    print("Greatest number is", b)
else:
    print("Numbers are equal")`,
        output: `Numbers are equal`,
      },
      {
        id: '3-4',
        question: 4,
        aim: 'Find the greatest among three numbers.',
        explanation: 'The program compares three numbers using multiple if-elif-else conditions. It checks each number against the other two and prints the largest value.',
        code: `a = 12
b = 45
c = 32

if a > b and a > c:
    print("Greatest number is", a)
elif b > a and b > c:
    print("Greatest number is", b)
else:
    print("Greatest number is", c)`,
        output: `Greatest number is 45`,
      },
      {
        id: '3-5',
        question: 5,
        aim: 'Determine whether the roots of a quadratic equation are real or imaginary and display them.',
        explanation: 'The discriminant (b² - 4ac) determines the nature of the roots. If it is positive or zero, the roots are real; otherwise, they are imaginary. The cmath module handles both real and complex roots.',
        code: `import cmath

a = 1
b = 2
c = 5

discriminant = b**2 - 4*a*c

root1 = (-b + cmath.sqrt(discriminant)) / (2*a)
root2 = (-b - cmath.sqrt(discriminant)) / (2*a)

if discriminant >= 0:
    print("Roots are real")
else:
    print("Roots are imaginary")

print("Root 1:", root1)
print("Root 2:", root2)`,
        output: `Roots are imaginary
Root 1: (-1+2j)
Root 2: (-1-2j)`,
      },
      {
        id: '3-6',
        question: 6,
        aim: 'Check whether a given year is a leap year.',
        explanation: 'A leap year is divisible by 400, or divisible by 4 but not by 100. The program checks these conditions and prints whether the year is a leap year.',
        code: `year = 2024

if (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0):
    print(year, "is a leap year")
else:
    print(year, "is not a leap year")`,
        output: `2024 is a leap year`,
      },
      {
        id: '3-7',
        question: 7,
        aim: 'Display the next calendar date.',
        explanation: 'The datetime module is used to work with dates. By adding one day using timedelta(days=1), the program automatically calculates the next calendar date.',
        code: `from datetime import date, timedelta

d = date(2005, 9, 20)

next_day = d + timedelta(days=1)

print("Input Date:", d.strftime("%d-%m-%Y"))
print("Next Date :", next_day.strftime("%d-%m-%Y"))`,
        output: `Input Date: 20-09-2005
Next Date : 21-09-2005`,
      },
      {
        id: '3-8',
        question: 8,
        aim: "Prepare a student's grade sheet based on marks obtained in five subjects.",
        explanation: 'The program calculates the total marks, percentage, and CGPA. It then uses conditional statements to assign a grade according to the CGPA range, making the grading process automatic and accurate.',
        code: `def get_grade(cgpa):
    if 0.0 <= cgpa <= 3.4: return "F"
    if 3.5 <= cgpa <= 5.0: return "C+"
    if 5.1 <= cgpa <= 6.0: return "B"
    if 6.1 <= cgpa <= 7.0: return "B+"
    if 7.1 <= cgpa <= 8.0: return "A"
    if 8.1 <= cgpa <= 9.0: return "A+"
    if 9.1 <= cgpa <= 10.0: return "O"
    return "Invalid"

name = "Rohit Sharma"
marks = {"PDS":70,"Python":80,"Chemistry":90,"English":60,"Physics":65}
total = sum(marks.values())
percentage = (total / (len(marks)*100)) * 100
cgpa = round(percentage / 10, 1)
grade = get_grade(cgpa)

print("Percentage:", f"{percentage:.2f}%")
print("CGPA:", cgpa)
print("Grade:", grade)`,
        output: `Percentage: 73.00%
CGPA: 7.3
Grade: A`,
      },
    ],
  },
  {
    id: 4,
    name: 'Infinite Spiral',
    title: 'Loops',
    boss: 'The Eternal Recursor',
    bossEmoji: '🌀',
    lore: 'Deep in the Infinite Spiral, the Eternal Recursor traps code in endless cycles. To escape, you must master the loop — the power to repeat, to iterate, and to break free at will.',
    power: 'Iteration',
    powerEmoji: '🔁',
    realm: 'Infinite Spiral',
    realmEmoji: '🌀',
    accent: 'cyan',
    cards: [
      {
        id: '4-1',
        question: 1,
        aim: 'Find the factorial of a given number using a loop.',
        explanation: 'A factorial is the product of all positive integers from 1 to the given number. The for loop is used to multiply each number one by one and calculate the factorial.',
        code: `num = 5

factorial = 1

for i in range(1, num + 1):
    factorial *= i

print("Factorial =", factorial)`,
        output: `Factorial = 120`,
      },
      {
        id: '4-2',
        question: 2,
        aim: 'Check whether a given number is an Armstrong number.',
        explanation: 'An Armstrong number is a number whose sum of each digit raised to the power of the number of digits equals the original number. The program separates each digit using a loop and verifies the condition.',
        code: `num = 153

order = len(str(num))
temp = num
total = 0

while temp > 0:
    digit = temp % 10
    total += digit ** order
    temp //= 10

if total == num:
    print(num, "is an Armstrong number")
else:
    print(num, "is not an Armstrong number")`,
        output: `153 is an Armstrong number`,
      },
      {
        id: '4-3',
        question: 3,
        aim: 'Print the Fibonacci series up to a given number of terms.',
        explanation: 'The Fibonacci series starts with 0 and 1. Each new number is the sum of the previous two numbers. A loop is used to generate and display the required number of terms.',
        code: `terms = 8

a = 0
b = 1

for i in range(terms):
    print(a, end=" ")
    a, b = b, a + b`,
        output: `0 1 1 2 3 5 8 13 `,
      },
      {
        id: '4-4',
        question: 4,
        aim: 'Check whether a given number is prime.',
        explanation: 'A prime number has only two factors: 1 and itself. The program checks divisibility from 2 up to the square root of the number using a loop. If any divisor is found, the number is not prime.',
        code: `num = 17

if num < 2:
    print("Not a Prime Number")
else:
    prime = True
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            prime = False
            break
    if prime:
        print("Prime Number")
    else:
        print("Not a Prime Number")`,
        output: `Prime Number`,
      },
      {
        id: '4-5',
        question: 5,
        aim: 'Check whether a number is a palindrome.',
        explanation: 'A palindrome number remains the same when its digits are reversed. The program reverses the number using a loop and compares it with the original number.',
        code: `num = 121

original = num
reverse = 0

while num > 0:
    digit = num % 10
    reverse = reverse * 10 + digit
    num //= 10

if original == reverse:
    print("Palindrome Number")
else:
    print("Not a Palindrome Number")`,
        output: `Palindrome Number`,
      },
      {
        id: '4-6',
        question: 6,
        aim: 'Find the sum of digits of a number.',
        explanation: 'The program extracts each digit using the modulus operator and adds it to a running total. The loop continues until all digits have been processed.',
        code: `num = 12345

sum_digits = 0

while num > 0:
    sum_digits += num % 10
    num //= 10

print("Sum of digits =", sum_digits)`,
        output: `Sum of digits = 15`,
      },
      {
        id: '4-7',
        question: 7,
        aim: 'Count and print all numbers divisible by 5 or 7 between 1 and 100.',
        explanation: 'The loop checks every number from 1 to 100. If a number is divisible by either 5 or 7, it is printed and counted.',
        code: `count = 0

for i in range(1, 101):
    if i % 5 == 0 or i % 7 == 0:
        print(i, end=" ")
        count += 1

print("\\nTotal Count =", count)`,
        output: `5 7 10 14 15 20 21 25 28 30 35 40 42 45 49 50 55 56 60 63 65 70 75 77 80 84 85 90 91 95 98 100
Total Count = 32`,
      },
      {
        id: '4-8',
        question: 8,
        aim: 'Convert all lowercase letters to uppercase.',
        explanation: 'The program uses a loop to read each character in the string. The upper() method converts lowercase letters into uppercase while leaving other characters unchanged.',
        code: `text = "hello world"

result = ""

for ch in text:
    result += ch.upper()

print("Uppercase String:", result)`,
        output: `Uppercase String: HELLO WORLD`,
      },
      {
        id: '4-9',
        question: 9,
        aim: 'Print all prime numbers between 1 and 100.',
        explanation: 'The program checks every number from 2 to 100. For each number, a nested loop verifies whether it has any divisor other than 1 and itself. Only prime numbers are displayed.',
        code: `for num in range(2, 101):
    prime = True
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            prime = False
            break
    if prime:
        print(num, end=" ")`,
        output: `2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97 `,
      },
      {
        id: '4-10',
        question: 10,
        aim: 'Print the multiplication table of a given number.',
        explanation: 'The program uses a for loop to multiply the given number by values from 1 to 10. Each result is displayed in a standard multiplication table format.',
        code: `num = 8

for i in range(1, 11):
    print(f"{num} x {i} = {num * i}")`,
        output: `8 x 1 = 8
8 x 2 = 16
8 x 3 = 24
8 x 4 = 32
8 x 5 = 40
8 x 6 = 48
8 x 7 = 56
8 x 8 = 64
8 x 9 = 72
8 x 10 = 80`,
      },
    ],
  },
  {
    id: 5,
    name: 'Glyph Library',
    title: 'Strings and Sets',
    boss: 'The Lexicon Weaver',
    bossEmoji: '📜',
    lore: 'The Glyph Library holds every word ever written in Syntaxia. The Lexicon Weaver guards the ancient texts — master strings and sets to read the spells hidden within.',
    power: 'Textcraft',
    powerEmoji: '🔤',
    realm: 'Glyph Library',
    realmEmoji: '📚',
    accent: 'violet',
    cards: [
      {
        id: '5-1',
        question: 1,
        aim: 'Count the number of capital letters in a given string.',
        explanation: 'The program checks each character in the string using the isupper() method. If the character is an uppercase letter, the counter is increased by one. Finally, the total number of capital letters is displayed.',
        code: `text = "PyThOn LAB 2026"

count_caps = sum(1 for ch in text if ch.isupper())

print("Capital letters:", count_caps)`,
        output: `Capital letters: 6`,
      },
      {
        id: '5-2',
        question: 2,
        aim: 'Count the total number of vowels in a given string.',
        explanation: 'The program compares each character with the vowels (a, e, i, o, u) in both uppercase and lowercase. Whenever a vowel is found, the count is increased and displayed at the end.',
        code: `text = "Welcome to Python Programming"

vowels = "aeiouAEIOU"

count_vowels = sum(1 for ch in text if ch in vowels)

print("Number of vowels:", count_vowels)`,
        output: `Number of vowels: 8`,
      },
      {
        id: '5-3',
        question: 3,
        aim: 'Print each word of a sentence on a separate line.',
        explanation: 'The split() method divides the sentence into individual words. A for loop then prints each word on a new line.',
        code: `sentence = "Python is easy to learn"

for word in sentence.split():
    print(word)`,
        output: `Python
is
easy
to
learn`,
      },
      {
        id: '5-4',
        question: 4,
        aim: 'Count the number of occurrences of a substring in a given string.',
        explanation: 'The program searches for the substring using the find() method. Each time the substring is found, the count is increased and the search continues from the next position until no more occurrences are found.',
        code: `main_string = "ABCDCDC"
sub_string = "CDC"

count = 0
start = 0

while True:
    index = main_string.find(sub_string, start)
    if index == -1:
        break
    count += 1
    start = index + 1

print("Occurrences:", count)`,
        output: `Occurrences: 2`,
      },
      {
        id: '5-5',
        question: 5,
        aim: 'Count the occurrence of each alphabet in a string (case-insensitive).',
        explanation: 'The program reads every alphabet in the string and converts it to uppercase. A dictionary stores the frequency of each letter so that uppercase and lowercase letters are counted together.',
        code: `text = "ABaBCbGc"

frequency = {}

for ch in text:
    if ch.isalpha():
        key = ch.upper()
        frequency[key] = frequency.get(key, 0) + 1

print(frequency)`,
        output: `{'A': 2, 'B': 3, 'C': 2, 'G': 1}`,
      },
      {
        id: '5-6',
        question: 6,
        aim: 'Count the number of unique words in a sentence using sets.',
        explanation: 'The sentence is first converted into lowercase and split into words. A set is then created because sets automatically remove duplicate values. The total number of unique words is obtained using len().',
        code: `sentence = "python is simple and python is powerful"

words = sentence.lower().split()

unique_words = set(words)

print("Unique words:", unique_words)
print("Count:", len(unique_words))`,
        output: `Unique words: {'and', 'powerful', 'simple', 'python', 'is'}
Count: 5`,
      },
      {
        id: '5-7',
        question: 7,
        aim: 'Perform basic set operations on two sets of fruits.',
        explanation: 'The program uses set operators to find common fruits, fruits present only in the first set, and all unique fruits from both sets. These operations demonstrate the usefulness of sets in handling collections of unique elements.',
        code: `s1 = {"apple", "banana", "mango", "grapes"}
s2 = {"banana", "orange", "kiwi", "mango"}

print("Fruits in both sets:", s1 & s2)
print("Fruits only in s1:", s1 - s2)
print("Total unique fruits:", len(s1 | s2))`,
        output: `Fruits in both sets: {'mango', 'banana'}
Fruits only in s1: {'apple', 'grapes'}
Total unique fruits: 6`,
      },
    ],
  },
  {
    id: 6,
    name: 'Collection Vault',
    title: 'Lists, Tuples & Dictionaries',
    boss: 'The Archive Titan',
    bossEmoji: '🗃️',
    lore: 'The Collection Vault stores all of Syntaxia\'s data structures. The Archive Titan challenges you to organize, sort, and retrieve — the power to hold a thousand values in a single name.',
    power: 'Data Binding',
    powerEmoji: '📦',
    realm: 'Collection Vault',
    realmEmoji: '🏛️',
    accent: 'orange',
    cards: [
      {
        id: '6-1',
        question: 1,
        aim: 'Scan n values in the range 0–3 and count the number of occurrences of each value.',
        explanation: 'A list is used to store the entered values. Another list is used to maintain the count of each number from 0 to 3. Every time a number is entered, its corresponding count is increased.',
        code: `values = [0, 1, 1, 2, 3, 2]
count = [0, 0, 0, 0]

for num in values:
    if 0 <= num <= 3:
        count[num] += 1

print("Occurrences:")
for i in range(4):
    print(f"{i} occurred {count[i]} time(s)")`,
        output: `Occurrences:
0 occurred 1 time(s)
1 occurred 2 time(s)
2 occurred 2 time(s)
3 occurred 1 time(s)`,
      },
      {
        id: '6-2',
        question: 2,
        aim: 'Create a tuple of numeric values and find its average.',
        explanation: 'A tuple stores multiple values that cannot be modified after creation. The sum() function calculates the total of all elements, and the average is obtained by dividing the total by the number of elements.',
        code: `numbers = (12, 25, 18, 30, 15)

average = sum(numbers) / len(numbers)

print("Tuple:", numbers)
print("Average =", average)`,
        output: `Tuple: (12, 25, 18, 30, 15)
Average = 20.0`,
      },
      {
        id: '6-3',
        question: 3,
        aim: 'Input the scores of students and print the runner-up score.',
        explanation: 'The scores are stored in a list. Duplicate scores are removed using a set, and the remaining values are sorted. The second highest score is displayed as the runner-up.',
        code: `scores = [50, 40, 30, 40, 50]

unique_scores = sorted(set(scores))

print("Runner-up Score =", unique_scores[-2])`,
        output: `Runner-up Score = 40`,
      },
      {
        id: '6-4',
        question: 4,
        aim: 'Create a dictionary containing names and cities, and perform different dictionary operations.',
        explanation: 'A dictionary stores data as key-value pairs. The program displays all names, city names, each person\'s details, and the total number of entries stored in the dictionary.',
        code: `students = {
    "Rithvik": "Hyderabad",
    "Rahul": "Delhi",
    "Priya": "Mumbai",
    "Sneha": "Chennai"
}

print("Names:")
for name in students.keys():
    print(name)

print("\\nCities:")
for city in students.values():
    print(city)

print("\\nStudent Details:")
for name, city in students.items():
    print(name, "->", city)

print("\\nTotal Students =", len(students))`,
        output: `Names: Rithvik, Rahul, Priya, Sneha
Cities: Hyderabad, Delhi, Mumbai, Chennai
Total Students = 4`,
      },
      {
        id: '6-5',
        question: 5,
        aim: 'Store movie details in a dictionary and perform different search operations.',
        explanation: 'Each movie is stored with its release year, profit status, and director. The program displays all movies, filters movies released before 2015, identifies profitable movies, and searches for movies by a specific director.',
        code: `movies = {
    "3 Idiots": {"Year": 2009, "Profit": True, "Director": "Rajkumar Hirani"},
    "KGF": {"Year": 2018, "Profit": True, "Director": "Prashanth Neel"},
    "Ra.One": {"Year": 2011, "Profit": False, "Director": "Anubhav Sinha"},
    "Dangal": {"Year": 2016, "Profit": True, "Director": "Nitesh Tiwari"}
}

print("Movies Released Before 2015:")
for movie, d in movies.items():
    if d["Year"] < 2015:
        print(movie)

print("\\nProfitable Movies:")
for movie, d in movies.items():
    if d["Profit"]:
        print(movie)`,
        output: `Movies Released Before 2015: 3 Idiots, Ra.One
Profitable Movies: 3 Idiots, KGF, Dangal`,
      },
    ],
  },
  {
    id: 7,
    name: 'Function Forge',
    title: 'Functions',
    boss: 'The Modular Dragon',
    bossEmoji: '🐉',
    lore: 'In the Function Forge, the Modular Dragon hoards reusable spells. To wield functions is to write once and cast a thousand times — recursion, lambda, and arguments are your weapons.',
    power: 'Reusability',
    powerEmoji: '♻️',
    realm: 'Function Forge',
    realmEmoji: '🔥',
    accent: 'red',
    cards: [
      {
        id: '7-1',
        question: 1,
        aim: 'Write a function that finds the maximum and minimum values from a sequence without using built-in max() and min().',
        explanation: 'The function starts by assuming the first element is both the maximum and minimum. It then compares every remaining element in the sequence and updates the maximum or minimum whenever needed.',
        code: `def find_max_min(sequence):
    maximum = sequence[0]
    minimum = sequence[0]

    for value in sequence[1:]:
        if value > maximum:
            maximum = value
        if value < minimum:
            minimum = value

    return maximum, minimum

numbers = [12, 45, 3, 89, 25]

maximum, minimum = find_max_min(numbers)

print("Maximum =", maximum)
print("Minimum =", minimum)`,
        output: `Maximum = 89
Minimum = 3`,
      },
      {
        id: '7-2',
        question: 2,
        aim: 'Write a function that returns the sum of cubes of all positive integers less than a given number.',
        explanation: 'The function uses a for loop to calculate the cube of every number from 1 to n-1. Each cube is added to a running total, which is returned at the end.',
        code: `def sum_of_cubes_below(n):
    total = 0
    for i in range(1, n):
        total += i ** 3
    return total

print("Sum of cubes =", sum_of_cubes_below(6))`,
        output: `Sum of cubes = 225`,
      },
      {
        id: '7-3',
        question: 3,
        aim: 'Print numbers from 1 to n using recursion.',
        explanation: 'Recursion is a technique in which a function calls itself. The function first reaches the base case and then prints the numbers while returning from each recursive call.',
        code: `def print_1_to_n(n):
    if n == 0:
        return
    print_1_to_n(n - 1)
    print(n, end=" ")

print_1_to_n(10)`,
        output: `1 2 3 4 5 6 7 8 9 10 `,
      },
      {
        id: '7-4',
        question: 4,
        aim: 'Print the Fibonacci series using recursion.',
        explanation: 'The Fibonacci sequence is generated by adding the previous two numbers. A recursive function calculates each Fibonacci number, and a loop prints the required number of terms.',
        code: `def fib(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    return fib(n - 1) + fib(n - 2)

print("Fibonacci Series:")
for i in range(8):
    print(fib(i), end=" ")`,
        output: `Fibonacci Series:
0 1 1 2 3 5 8 13 `,
      },
      {
        id: '7-5',
        question: 5,
        aim: 'Calculate the volume of a cone using a lambda function.',
        explanation: 'A lambda function is a short anonymous function used for simple calculations. Here, it calculates the volume of a cone using the formula: (1/3) × π × r² × h.',
        code: `import math

cone_volume = lambda r, h: (1 / 3) * math.pi * r ** 2 * h

print("Volume =", cone_volume(3, 5))`,
        output: `Volume = 47.12388980384689`,
      },
      {
        id: '7-6',
        question: 6,
        aim: 'Return the maximum and minimum values from a list using a lambda function.',
        explanation: 'The lambda function returns a tuple containing the maximum and minimum values of the list. It uses Python\'s built-in max() and min() functions for simplicity.',
        code: `data = [10, 6, 8, 90, 12, 56]

max_min = lambda values: (max(values), min(values))

print("Result =", max_min(data))`,
        output: `Result = (90, 6)`,
      },
      {
        id: '7-7',
        question: 7,
        aim: 'Demonstrate keyword arguments, default arguments, and variable-length arguments.',
        explanation: 'Python functions support different types of arguments. Keyword arguments allow values to be passed using parameter names, default arguments provide predefined values, and variable-length arguments (*args) allow passing any number of values.',
        code: `# Keyword Argument
def student_info(name, age):
    print(f"Name: {name}, Age: {age}")

student_info(age=39, name="Messi")

# Default Argument
def greet(name, message="Welcome to Python Lab"):
    print(message, name)

greet("Rithvik")

# Variable-Length Argument
def add_numbers(*numbers):
    print("Sum =", sum(numbers))

add_numbers(10, 20, 30, 40)`,
        output: `Name: Messi, Age: 39
Welcome to Python Lab Rithvik
Sum = 100`,
      },
    ],
  },
  {
    id: 8,
    name: 'Abyssal Storage',
    title: 'File Handling & Exception Handling',
    boss: 'The Void Handler',
    bossEmoji: '🕳️',
    lore: 'Beneath Syntaxia lies the Abyssal Storage, where data persists beyond the crash. The Void Handler guards the try-except gates — survive the abyss and you gain the power to catch any error.',
    power: 'Resilience',
    powerEmoji: '🛡️',
    realm: 'Abyssal Storage',
    realmEmoji: '💾',
    accent: 'blue',
    cards: [
      {
        id: '8-1',
        question: 1,
        aim: 'Create a text file and write user input into it.',
        explanation: 'The program creates a text file using write (w) mode. It takes input from the user and stores it in the file. If the file already exists, its previous contents are replaced.',
        code: `file = open("student.txt", "w")

text = "Welcome to Python Lab"

file.write(text)
file.close()

print("Data written successfully.")`,
        output: `Data written successfully.`,
      },
      {
        id: '8-2',
        question: 2,
        aim: 'Read the contents of a text file.',
        explanation: 'The file is opened in read (r) mode. The read() method retrieves all the data stored in the file and displays it on the screen.',
        code: `file = open("student.txt", "r")

content = file.read()

print(content)

file.close()`,
        output: `Welcome to Python Lab`,
      },
      {
        id: '8-3',
        question: 3,
        aim: 'Append new data to an existing text file.',
        explanation: 'The file is opened in append (a) mode, which adds new data at the end without deleting the existing content.',
        code: `file = open("student.txt", "a")

file.write("\\nPython File Handling")

file.close()

print("Data appended successfully.")`,
        output: `Data appended successfully.`,
      },
      {
        id: '8-4',
        question: 4,
        aim: 'Count the number of lines, words, and characters in a text file.',
        explanation: 'The program reads the complete file and calculates the number of lines, words, and characters using built-in string methods such as split() and len().',
        code: `file = open("student.txt", "r")

content = file.read()

lines = content.split("\\n")
words = content.split()

print("Lines =", len(lines))
print("Words =", len(words))
print("Characters =", len(content))

file.close()`,
        output: `Lines = 2
Words = 7
Characters = 42`,
      },
      {
        id: '8-5',
        question: 5,
        aim: 'Handle division by zero using exception handling.',
        explanation: 'The try block contains the code that may generate an error. If the denominator is zero, the except block catches the ZeroDivisionError and displays an appropriate message instead of terminating the program.',
        code: `try:
    a = 10
    b = 0
    result = a / b
    print("Result =", result)

except ZeroDivisionError:
    print("Division by zero is not allowed.")`,
        output: `Division by zero is not allowed.`,
      },
      {
        id: '8-6',
        question: 6,
        aim: 'Handle invalid user input using exception handling.',
        explanation: 'If the user enters a value other than an integer, Python raises a ValueError. The program catches this exception and displays a user-friendly error message.',
        code: `try:
    age = int("abc")
    print("Age =", age)

except ValueError:
    print("Please enter a valid integer.")`,
        output: `Please enter a valid integer.`,
      },
      {
        id: '8-7',
        question: 7,
        aim: 'Handle multiple exceptions in a single program.',
        explanation: 'A single try block can have multiple except blocks to handle different types of errors. This makes the program more reliable and prevents unexpected crashes.',
        code: `try:
    num = int("abc")
    result = 100 / num
    print("Result =", result)

except ZeroDivisionError:
    print("Cannot divide by zero.")

except ValueError:
    print("Invalid input. Please enter a number.")`,
        output: `Invalid input. Please enter a number.`,
      },
      {
        id: '8-8',
        question: 8,
        aim: 'Demonstrate the use of the finally block.',
        explanation: 'The finally block always executes whether an exception occurs or not. It is commonly used to close files, release resources, or display completion messages.',
        code: `try:
    file = open("student.txt", "r")
    print(file.read())

except FileNotFoundError:
    print("File not found.")

finally:
    print("Program execution completed.")`,
        output: `Welcome to Python Lab
Python File Handling
Program execution completed.`,
      },
    ],
  },
  {
    id: 9,
    name: 'Class Citadel',
    title: 'Object-Oriented Programming',
    boss: 'The Inheritance Overlord',
    bossEmoji: '👑',
    lore: 'At the peak of Syntaxia rises the Class Citadel. The Inheritance Overlord commands the deepest magic — classes, objects, inheritance, and polymorphism. Defeat the Overlord to become a true architect of code.',
    power: 'Abstraction',
    powerEmoji: '🏛️',
    realm: 'Class Citadel',
    realmEmoji: '🏰',
    accent: 'fuchsia',
    cards: [
      {
        id: '9-1',
        question: 1,
        aim: 'Create a Student class with student details and display the information of three students.',
        explanation: 'A class is a blueprint used to create objects. In this program, the Student class stores the student\'s name, SAP ID, and marks. Three objects are created, and their details are displayed using a class method.',
        code: `class Student:
    def __init__(self, name, sap_id, marks):
        self.name = name
        self.sap_id = sap_id
        self.marks = marks

    def display(self):
        print("Name :", self.name)
        print("SAP ID :", self.sap_id)
        print("Marks :", self.marks)
        print()

s1 = Student("KS RITHVIK", "590030656", {"Physics":88,"Chemistry":91,"Maths":95})
s2 = Student("Rahul", "500082001", {"Physics":82,"Chemistry":85,"Maths":80})
s3 = Student("Priya", "500082002", {"Physics":90,"Chemistry":92,"Maths":89})

s1.display()
s2.display()
s3.display()`,
        output: `Name : KS RITHVIK | SAP ID : 590030656 | Marks : {'Physics': 88, 'Chemistry': 91, 'Maths': 95}
Name : Rahul | SAP ID : 500082001 | Marks : {'Physics': 82, 'Chemistry': 85, 'Maths': 80}
Name : Priya | SAP ID : 500082002 | Marks : {'Physics': 90, 'Chemistry': 92, 'Maths': 89}`,
      },
      {
        id: '9-2',
        question: 2,
        aim: 'Initialize student details using a constructor and calculate the total marks.',
        explanation: 'The constructor (__init__) automatically initializes object data when an object is created. Separate methods are used to display student information and calculate the total marks, making the program more organized.',
        code: `class StudentRecord:
    def __init__(self, name, sap_id, marks):
        self.name = name
        self.sap_id = sap_id
        self.marks = marks

    def display(self):
        print("Name:", self.name)
        print("SAP ID:", self.sap_id)
        print("Marks:", self.marks)

    def total_marks(self):
        return sum(self.marks.values())

student = StudentRecord("KS RITHVIK", "590030656",
    {"Physics":90,"Chemistry":85,"Maths":95})

student.display()
print("Total Marks =", student.total_marks())`,
        output: `Name: KS RITHVIK
SAP ID: 590030656
Marks: {'Physics': 90, 'Chemistry': 85, 'Maths': 95}
Total Marks = 270`,
      },
      {
        id: '9-3',
        question: 3,
        aim: 'Implement different types of inheritance.',
        explanation: 'Inheritance allows one class to use the properties and methods of another class. It promotes code reusability and reduces duplication. This program demonstrates single inheritance.',
        code: `class Person:
    def introduce(self):
        print("I am a person.")

class Teacher(Person):
    def teach(self):
        print("I teach Python.")

teacher = Teacher()

teacher.introduce()
teacher.teach()`,
        output: `I am a person.
I teach Python.`,
      },
      {
        id: '9-4',
        question: 4,
        aim: 'Demonstrate method overriding.',
        explanation: 'Method overriding occurs when a child class provides its own implementation of a method already defined in the parent class. This allows the child class to customize inherited behavior.',
        code: `class Shape:
    def describe(self):
        print("This is a generic shape.")

    def area(self):
        return 0

class Circle(Shape):
    def area(self):
        radius = 5
        return 3.14 * radius * radius

shape = Shape()
circle = Circle()

shape.describe()
print("Shape Area =", shape.area())

circle.describe()
print("Circle Area =", circle.area())`,
        output: `This is a generic shape.
Shape Area = 0
This is a generic shape.
Circle Area = 78.5`,
      },
      {
        id: '9-5',
        question: 5,
        aim: 'Implement operator overloading by adding two Point objects.',
        explanation: 'Operator overloading allows operators such as + to work with user-defined objects. Here, the __add__() method is overloaded so that two Point objects can be added together.',
        code: `class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)

    def display(self):
        print(f"({self.x}, {self.y})")

p1 = Point(2, 3)
p2 = Point(4, 5)

result = p1 + p2

print("Point 1:", end=" ")
p1.display()
print("Point 2:", end=" ")
p2.display()
print("Sum:", end=" ")
result.display()`,
        output: `Point 1: (2, 3)
Point 2: (4, 5)
Sum: (6, 8)`,
      },
    ],
  },
  {
    id: 10,
    name: 'Data Nexus',
    title: 'Data Analysis & Visualization',
    boss: 'The Oracle of Insight',
    bossEmoji: '🔮',
    lore: 'The final battle. The Oracle of Insight commands the Data Nexus — the convergence of all knowledge. NumPy, Pandas, and Matplotlib are the ultimate spells. Defeat the Oracle to save Syntaxia and reveal the truth hidden in the data.',
    power: 'Mastery',
    powerEmoji: '🏆',
    realm: 'Data Nexus',
    realmEmoji: '🌌',
    accent: 'yellow',
    cards: [
      {
        id: '10-1',
        question: 1,
        aim: 'Create a NumPy array and find the sum of all its elements.',
        explanation: 'NumPy is a powerful library used for numerical computations in Python. A NumPy array is created, and the np.sum() function is used to calculate the sum of all the elements efficiently.',
        code: `import numpy as np

arr = np.array([12, 25, 7, 30, 16])

print("Array:", arr)
print("Sum of all elements:", np.sum(arr))`,
        output: `Array: [12 25  7 30 16]
Sum of all elements: 90`,
      },
      {
        id: '10-2',
        question: 2,
        aim: 'Create a 3×3 NumPy array and find the row sums, column sums, and second maximum element.',
        explanation: 'The program demonstrates common NumPy operations. It calculates the sum of each row and column using the axis parameter and finds the second largest element by sorting the array values.',
        code: `import numpy as np

matrix_3x3 = np.array([
    [12, 5, 8],
    [7, 25, 14],
    [3, 19, 11],
])

row_sums = np.sum(matrix_3x3, axis=1)
column_sums = np.sum(matrix_3x3, axis=0)
second_max = np.sort(matrix_3x3, axis=None)[-2]

print("Row sums:", row_sums)
print("Column sums:", column_sums)
print("Second maximum element:", second_max)`,
        output: `Row sums: [25 46 33]
Column sums: [22 49 33]
Second maximum element: 19`,
      },
      {
        id: '10-3',
        question: 3,
        aim: 'Perform matrix multiplication using NumPy.',
        explanation: 'Matrix multiplication is a common mathematical operation used in machine learning and data analysis. NumPy performs matrix multiplication efficiently using the @ operator.',
        code: `import numpy as np

matrix_a = np.array([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
])

matrix_b = np.array([
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1],
])

product = matrix_a @ matrix_b

print(product)`,
        output: `[[ 30  24  18]
 [ 84  69  54]
 [138 114  90]]`,
      },
      {
        id: '10-4',
        question: 4,
        aim: 'Calculate the powers of array elements using Pandas.',
        explanation: 'Pandas supports element-wise mathematical operations. Here, every element in one Series is raised to the power of the corresponding element in another Series.',
        code: `import pandas as pd

base_values = pd.Series([0, 1, 2, 3, 4])
power_values = pd.Series([1, 2, 3, 2, 1])

powered_values = base_values ** power_values

print(powered_values)`,
        output: `0    0
1    1
2    8
3    9
4    4
dtype: int64`,
      },
      {
        id: '10-5',
        question: 5,
        aim: 'Display the first three rows of a Pandas DataFrame.',
        explanation: 'A DataFrame stores data in a tabular form. The head(3) function returns the first three rows, making it useful for previewing a dataset.',
        code: `import pandas as pd

exam_df = pd.DataFrame({
    "name": ["Anastasia", "Dima", "Katherine", "James", "Emily"],
    "score": [12.5, 9.0, 16.5, 18.0, 15.5],
    "attempts": [1, 3, 2, 3, 2],
    "qualify": ["Yes", "No", "Yes", "Yes", "Yes"]
})

print(exam_df.head(3))`,
        output: `        name  score  attempts qualify
0  Anastasia   12.5         1     Yes
1       Dima    9.0         3      No
2  Katherine   16.5         2     Yes`,
      },
      {
        id: '10-6',
        question: 6,
        aim: 'Create a student DataFrame, display the first three rows, and filter by department.',
        explanation: 'A DataFrame is a table-like structure in Pandas used to organize data into rows and columns. A student dataset is created, the first three rows are displayed using head(3), and records belonging to the AI department are filtered and displayed.',
        code: `import pandas as pd

student_data = {
    "Name": ["Rithvik", "Rahul", "Sneha", "Ananya", "Arjun"],
    "Marks": [91, 78, 85, 95, 88],
    "Department": ["AI", "CSE", "AI", "ECE", "AI"]
}

exam_df = pd.DataFrame(student_data)

print("Complete DataFrame:")
print(exam_df)

print("\\nFirst 3 Rows:")
print(exam_df.head(3))

print("\\nStudents from AI Department:")
print(exam_df[exam_df["Department"] == "AI"])`,
        output: `Complete DataFrame:
      Name  Marks Department
0  Rithvik     91         AI
1    Rahul     78        CSE
2    Sneha     85         AI
3   Ananya     95        ECE
4    Arjun     88         AI

First 3 Rows:
      Name  Marks Department
0  Rithvik     91         AI
1    Rahul     78        CSE
2    Sneha     85         AI

Students from AI Department:
      Name  Marks Department
0  Rithvik     91         AI
2    Sneha     85         AI
4    Arjun     88         AI`,
      },
      {
        id: '10-7',
        question: 7,
        aim: 'Create a bar chart using Matplotlib to compare marks in different subjects.',
        explanation: 'Matplotlib is a Python library used to create graphs and charts. A bar chart is created to compare marks obtained in different subjects, helping visualize the data more effectively than a table.',
        code: `import matplotlib.pyplot as plt

subjects = ["Python", "Java", "C++", "SQL", "AI"]
marks = [90, 82, 76, 88, 95]

plt.figure(figsize=(8,5))
plt.bar(subjects, marks, color="skyblue")
plt.title("Student Marks in Different Subjects")
plt.xlabel("Subjects")
plt.ylabel("Marks")
plt.grid(axis="y", linestyle="--", alpha=0.6)
plt.show()`,
        output: `Bar chart displayed: 5 bars showing marks for Python (90), Java (82), C++ (76), SQL (88), and AI (95).`,
        hasImage: true,
      },
    ],
  },
];

export const TOTAL_CARDS = LEVELS.reduce((sum, level) => sum + level.cards.length, 0);
export const TOTAL_LEVELS = LEVELS.length;
