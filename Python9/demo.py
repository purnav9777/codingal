#file handling in Python

file = open("example.txt")
content = file.read()
print(content)
file.close()

#using with statement
with open("example.txt") as file:
    content = file.read()
    print(content)  
    file.close()  

    #writing to a file
with open("example.txt", "w") as file:
    file.write("Hello, World!")
    file.close()