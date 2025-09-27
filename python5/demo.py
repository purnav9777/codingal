import turtle

sc = turtle.Screen()

sc.bgcolor("orange")
sc.setup(800, 600)

turtle.title("welcome to python5")
t = turtle.Turtle()

for i in range(36):
    t.circle(100)
    t.right(10)

turtle.done()