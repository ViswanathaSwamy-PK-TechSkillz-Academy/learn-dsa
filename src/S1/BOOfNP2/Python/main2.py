def display_coordinates(size):
    for i in range(size):
        for j in range(size):
            print(f"({i}, {j})", end=" ")
        print()  # Add a newline after each row


size = 8
display_coordinates(size)
