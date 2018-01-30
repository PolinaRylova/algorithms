import java.util.HashMap;
import java.util.Map;

public class phoneBook {

    public static void main(String[] args) {
        Map<String, Integer> phoneBook = new HashMap<>();

        phoneBook.put("jenny", 8675309);
        phoneBook.put("emergency", 911);

        System.out.println(phoneBook.get("jenny")); // 8675309
    }
}