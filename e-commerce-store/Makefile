# Name of your JAR file
JAR_FILE = target/e-commerce-store-0.0.1-SNAPSHOT.jar

# Default target (what runs when you just type 'make')
all: clean build run

# Clean the project
clean:
	mvn clean

# Build the JAR
build:
	mvn package

# Run the JAR
run:
	java -jar $(JAR_FILE)

