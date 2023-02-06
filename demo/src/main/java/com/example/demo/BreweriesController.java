package com.example.demo;


import java.util.Arrays;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;




// @RestController
// @RequestMapping("*")
// public class BreweriesController {

//   @Autowired
//   private RestTemplate restTemplate;

//   @GetMapping
//   public List<Brewery> getBreweries() {
//     System.out.println("BreweryAPi hit!!");
//     ResponseEntity<List<Brewery>> response = restTemplate.exchange(
//         "https://api.openbrewerydb.org/breweries/",
//         HttpMethod.GET,
//         null,
//         new ParameterizedTypeReference<List<Brewery>>(){});
//     System.out.println(response);
//     return response.ok();
//   }
// }

@RestController
public class BreweriesController {
    private Object apiResponse;

    @GetMapping("/api")
    public Object getApiResponse() {
        if (apiResponse == null) {
            try {
                RestTemplate restTemplate = new RestTemplate();
                HttpHeaders headers = new HttpHeaders();
                headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
                headers.add("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36");
                HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);

                Object response = restTemplate.exchange("https://api.openbrewerydb.org/breweries/", HttpMethod.GET,entity,Object.class);

                System.out.println(response);
                apiResponse = response;
            } catch (Exception ex) {
               ex.printStackTrace();

            }
            // RestTemplate restTemplate = new RestTemplate();
            // HttpHeaders headers = new HttpHeaders();
            // String url = "https://api.openbrewerydb.org/breweries/";
            // ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
            // apiResponse = response.toString();
        }
        return apiResponse;
    }
}
