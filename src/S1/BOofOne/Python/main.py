student_names = [
    "Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah",
    "Isaac", "Julia", "Kevin", "Lily", "Mike", "Nina", "Oliver", "Pamela",
    "Quincy", "Rachel"
]


def show_name_at(students, index):
    if 0 <= index < len(students):
        print(f"Student: {students[index]} at index {index}")
    else:
        print(f"Error: Index {index} is out of bounds.")


show_name_at(student_names, 41)  # Error: Index 41 is out of bounds.
