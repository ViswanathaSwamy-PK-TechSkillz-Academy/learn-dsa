def show_names(students):
    for student in students:
        print(student.upper())

    for student in students:
        print(student.lower())

# Example usage:
student_names = [
    "Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah",
    "Isaac", "Julia", "Kevin", "Lily", "Mike", "Nina", "Oliver", "Pamela",
    "Quincy", "Rachel"
]

show_names(student_names)
