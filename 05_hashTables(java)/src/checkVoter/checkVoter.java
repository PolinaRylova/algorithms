import java.util.HashMap;
import java.util.Map;

public class CheckVoter {

    public static void main(String[] args) {
        Map<String, Boolean> voted = new HashMap<>();

        checkVoter(voted, "tom"); // let them vote!
        checkVoter(voted,"mike"); // let them vote!
        checkVoter(voted,"mike"); // kick them out!
    }

    private static void checkVoter(Map<String, Boolean> map, String name) {
        if (map.containsKey(name)) {
            System.out.println("kick them out!");
        } else {
            map.put(name, true);
            System.out.println("let them vote!");
        }
    }
}