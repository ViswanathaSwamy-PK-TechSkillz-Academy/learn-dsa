# student_helper.py

def show_name_at(students, index):
    if 0 <= index < len(students):
        print(f"Student: {students[index]} at index {index}")
    else:
        print(f"Error: Index {index} is out of bounds of total {
              len(students)}.")
