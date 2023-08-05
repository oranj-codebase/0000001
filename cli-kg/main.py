projects = [
    (1, "Ordinautz"),
    (2, "MetaBRC"),
    (3, "Bitcoin Frogs"),
    (4, "Onchain Maxi Biz"),
    (5, "Onchain Monkeys"),
]

relationships = [
    (6, 1),
    (7, 2),
    (8, 3),
    (9, 4),
    (10, 5),
]

founders = {
    6: "Hantoshi",
    7: "Good",
    8: "Frogtoshi",
    9: "ZKShark",
    10: "Danny",
}

technologies = {
    1: "Recursive Inscription",
    2: "Recursive Inscription",
    3: "Inscription",
    4: "Inscription",
    5: "Reinscription",
}


def list_projects():
    print("Choose a project:")
    for i, project in projects:
        print(f"{i}. {project}")

def choose_project():
    list_projects()
    while True:
        project_choice = input("Select a project by number (or 'B' to go back, 'Exit' to exit): ").strip().lower()
        if project_choice.lower() in ['b', 'back']:
            return None
        if project_choice.lower() in ['exit', 'e']:
            return 'exit'
        try:
            project_choice = int(project_choice)
            if project_choice in range(1, len(projects) + 1):
                return project_choice
        except ValueError:
            pass
        print("Invalid choice. Try again.")

def choose_option(project_choice):
    while True:
        choice = input("Choose founder or technology (or 'B' to go back, 'Exit' to exit): ").strip().lower()
        if choice in ['b', 'back']:
            return None
        if choice in ['exit', 'e']:
            return 'exit'
        if choice in ["founder", "f"]:
            for rel in relationships:
                if rel[1] == project_choice:
                    print(f"Founder: {founders[rel[0]]}")
            return
        elif choice in ["technology", "t"]:
            print(f"Technology: {technologies[project_choice]}")
            return
        else:
            print("Invalid choice. Try again.")

def main():
    while True:
        answer = input("Do you want to know the Ordinal Players? (Yes/No/Back/Exit): ").strip().lower()
        if answer in ["exit", "e"]:
            break
        if answer in ["yes", "y"]:
            project_choice = choose_project()
            if project_choice in ['exit', 'e']:
                return
            if project_choice is not None:
                option_choice = choose_option(project_choice)
                if option_choice in ['exit', 'e']:
                    return
        elif answer in ["no", "n"]:
            print("Few understand, you are the many.")
            break
        elif answer in ['b', 'back']:
            continue
        else:
            print("Invalid response. Try again.")

if __name__ == "__main__":
    main()
