# ---- Stage 1: Build ----
FROM maven:3.9-eclipse-temurin-25 AS build
WORKDIR /app

# Copy only the dependency file first (caching trick)
COPY pom.xml .
RUN mvn dependency:go-offline

# Now copy the actual source code and build
COPY src ./src
RUN mvn clean package -DskipTests

# ---- Stage 2: Run ----
FROM eclipse-temurin:25-jre-alpine
WORKDIR /app

# Grab only the finished jar from Stage 1 - nothing else
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]

LABEL authors="Geraldy Miero"