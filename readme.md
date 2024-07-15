**This is free api to know information about any app, list of apps, developer and reviews**

**Author:** Raunit Verma

**Contact:** [https://twitter.com/iraunit](https://twitter.com/iraunit)

**Github:** [https://github.com/iraunit](https://github.com/iraunit)

**Website:** [codingkaro.in](https://codingkaro.in)

**Deployed On:** [googleplay.codingkaro.in](https://googleplay.codingkaro.in)

**EndPoints:**

- [List of Apps By A Developer](#list-of-apps-by-a-developer)
- [List of Reviews of An App](#list-of-reviews-of-an-app)
- [App Details](#app-details)

## List of Apps By A Developer

### Request

```/developer/:name```

### Response

```{
"message": "Success",
"result": [ 
    {
        "title": "",
        "appId": "",
        "url": "",
        "icon": ",
        "developer": "",
        "currency": "",
        "price": 0,
        "free": ,
        "summary": ""
    } 
],
"code": 200,
"error": "Nil"
}
```

## List of Reviews of An App

### Request

```/reviews/:app_id```  

### Response


```{
"message": "Success",
"result": [ 
     {
        "id": "",
        "userName": "",
        "userImage": "",
        "score": ,
        "scoreText": "",
        "url": "",
        "title": ,
        "text": "",
        "replyDate": null,
        "replyText": null,
        "version": "",
        "thumbsUp": ,
        "criterias": []
     } 
],
"code": 200,
"error": "Nil"
}
```

## App Details

### Request

```/app/:app_id```

### Response



```{
"message": "Success",
"result": [ 
     {
          title: "",
          description: "",
          descriptionHTML: "",
          summary: "",
          installs: "",
          minInstalls: "",
          maxInstalls: "",
          histogram: {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0
          },
          price: 0,
          free: true,
          currency: "",
          priceText: "",
          available: true,
          offersIAP: false,
          androidVersion: "",
          androidVersionText: "",
          androidMaxVersion: "",
          developer: "",
          developerId: "",
          developerEmail: "",
          developerWebsite: "",
          privacyPolicy: "",
          developerInternalID: "",
          genre: "",
          genreId: "",
          categories: [
            {
              name: "",
              id: ""
            }
          ],
          icon: "",
          headerImage: "",
          screenshots: [
            ""
          ],
          video: "",
          videoImage: "",
          contentRating: "",
          adSupported: true,
          released: "",
          updated: 0,
          version: "",
          recentChanges: "",
          comments: [
            null
          ],
          preregister: false,
          earlyAccessEnabled: false,
          isAvailableInPlayPass: false,
          appId: "",
          url: ""
     } 
],
"code": 200,
"error": "Nil"
}
```


