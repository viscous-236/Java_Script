# 4 Pillars
1.Abstraction
Abstraction in Object-Oriented Programming (OOP) is the concept of hiding the complex implementation details of a system and exposing only the essential features and behavior to the user. It allows developers to focus on what an object does instead of how it achieves it.
Key Points:
Simplification: Abstraction simplifies complex systems by breaking them into smaller, more manageable components.
Essential Details: It exposes only the relevant attributes and behaviors of an object, hiding unnecessary details.
Implementation Hiding: The internal workings are hidden from the user; only the interface or methods are made visible.

2.Encapsualtion
Encapsulation is closely related to abstraction, as both aim to protect the inner workings of a class, but encapsulation specifically focuses on how data is accessed and modified.
Encapsulation in Object-Oriented Programming (OOP) refers to bundling data (fields) and methods (functions) that operate on the data into a single unit, typically a class. It also restricts direct access to some components, ensuring that data is accessed and modified only through controlled interfaces.
Key Principles of Encapsulation:
Data Hiding: Prevents unauthorized access to sensitive data by using access specifiers (like private, protected, and public in many languages).
Controlled Access: Provides public methods (getters and setters) to access and modify private data securely.
Improves Maintainability: Encapsulation makes the code more modular, easier to maintain, and reduces dependencies.

3.Inheritance
Inheritance in Object-Oriented Programming (OOP) is a mechanism where one class (the child or derived class) acquires the properties and methods of another class (the parent or base class). It enables code reusability and establishes a natural hierarchy between classes.

Key Concepts:
Parent Class (Base Class): The class whose properties and methods are inherited.
Child Class (Derived Class): The class that inherits from the parent class.
Code Reusability: Allows reusing existing code, reducing redundancy.
Overriding: The child class can modify or override the methods of the parent class to provide specific behavior.
Types of Inheritance:
Single: One child inherits from one parent.
Multiple: A child inherits from multiple parents (not supported in some languages like Java but can be mimicked using interfaces).
Multilevel: A class inherits from a class, which in turn inherits from another class.
Hierarchical: Multiple children inherit from a single parent.

4.Plymorphism
Polymorphism in Object-Oriented Programming (OOP) refers to the ability of a single interface or method to represent different types or behaviors. It allows objects of different classes to be treated as objects of a common superclass, providing flexibility and extensibility.

The term polymorphism means "many forms." It is primarily achieved through method overriding and method overloading.

Types of Polymorphism:
Compile-Time Polymorphism (Static Binding):
Achieved using method overloading or operator overloading.
The decision about which method to call is made at compile time.
Runtime Polymorphism (Dynamic Binding):
Achieved using method overriding.
The decision about which method to call is made at runtime.
