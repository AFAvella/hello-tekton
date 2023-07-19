import java.util.Random;

public class RandomNameGenerator {

    // Lista de nombres para cada género
    private static final String[] maleNames = {"Carlos", "Juan", "Miguel", "Alejandro", "José"};
    private static final String[] femaleNames = {"María", "Ana", "Laura", "Isabel", "Sofía"};

    // Función para generar un número aleatorio en un rango
    private static int getRandomNumber(int max) {
        Random random = new Random();
        return random.nextInt(max);
    }

    // Función para generar nombres aleatorios
    private static String generateRandomName() {
        boolean isMale = getRandomNumber(2) == 0; // Genera 0 o 1 (falso o verdadero)
        String[] names = isMale ? maleNames : femaleNames;
        int randomIndex = getRandomNumber(names.length);
        return names[randomIndex];
    }

    public static void main(String[] args) {
        // Generar un nombre aleatorio y mostrarlo en la consola
        String randomName = generateRandomName();
        System.out.println("Nombre generado: " + randomName);
    }
}
