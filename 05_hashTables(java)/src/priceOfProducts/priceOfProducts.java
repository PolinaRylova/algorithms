import java.util.HashMap;
import java.util.Map;

public class PriceOfProducts {

    public static void main(String[] args) {
        Map<String, Double> book = new HashMap<>();

        book.put("apple", 0.67);
        book.put("pear", 0.76);
        book.put("avocado", 1.47);
        book.put("milk", 1.45);

        System.out.println(book); // {apple=0.67, avocado=1.47, pear=0.76, milk=1.45}
    }
}