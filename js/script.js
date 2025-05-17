
    function atomiApplyParams({inputUrl}) {
      try {
        console.log(inputUrl)
        const inputUrlObj = new URL(inputUrl, window.location.origin);
        const currentPageParams = new URLSearchParams(window.location.search);
        const inputUrlParams = new URLSearchParams(inputUrlObj.search);
      
        // Iterate over all parameters in the current page's URL
        for (const [key, value] of currentPageParams) {
          // If the input URL does not already contain the parameter, add it
          if (!inputUrlParams.has(key)) {
            inputUrlParams.append(key, value);
          }
        }
      
        // Construct the final URL
        const finalUrl = inputUrlObj.origin + inputUrlObj.pathname + '?' + inputUrlParams.toString();
        console.log(finalUrl)
        return finalUrl;
      } catch (error) {
        console.log(error);
      }
    }

    function atomiFormatDate(options = { slated: false, addDate: 0 }) {
      try {
        const userLocale = navigator.language || 'en-US';
        const defaultOptions = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };

        const today = new Date();

        if (options.slated) {
          const slatedDate = new Date(today);
          slatedDate.setDate(slatedDate.getDate() + (options.addDate || 0));

          const formatter = new Intl.DateTimeFormat(userLocale, {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          });

          return formatter.format(slatedDate);

          // const day = slatedDate.getDate().toString().padStart(2, "0");
          // const month = (slatedDate.getMonth() + 1).toString().padStart(2, "0");
          // const year = slatedDate.getFullYear();
          // return `${day}/${month}/${year}`;
        }

        if(options.addDate){
          today.setDate(today.getDate()+options.addDate)
        }
        const formattedDate = today.toLocaleDateString(userLocale, defaultOptions);

        return formattedDate;
      } catch (error) {
        console.log(error);
      }
    };

    function atomiFormatTime() {
      try {
        const now = new Date();
        return now.toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
      } catch (error) {
        console.log(error);
      }
    };
    function runDelayedFunctions(data) {
      try {
        document.querySelectorAll('.atomicat-delay').forEach(el => el.classList.remove('atomicat-delay'));
        if(data?.setDisplayed){
          localStorage.setItem(data?.setDisplayed, true);
        }
        
      } catch (error) {
        console.log(error);
      }
    }
  (function() {
          try {
              const clickeventList = [{"compKey":"5c82fdad-8efe-4647-bac7-f17f1f4852de","misc":{"type":"button"}},{"compKey":"49ad2851-1a02-4dea-8693-ed40d470f330","misc":{"type":"button"}},{"compKey":"6f88690f-5a1d-49d5-99b9-31ab721e96dc","misc":{"type":"button"}},{"compKey":"57698684-8810-451b-ad3b-72aea5a0ad21","misc":{"type":"button"}}];
    
    
              clickeventList.forEach((comp, index) => {
                  const compKey = comp?.compKey?.slice(0, 7);
                  const eleType = comp?.misc?.type;
                  const showItemsById = comp?.misc?.showItemsById || comp?.misc?.showItemsByClass;
                  const hideAfterClick = comp?.misc?.hideAfterClick;
                  const hideOnComplete = comp?.misc?.hideOnComplete;
                  if(hideAfterClick) {
                    const hideAfterClickEle = document.querySelector(`.atomicat-hide-after-click-${compKey}`);
                    console.log(hideAfterClickEle, "hideAfterClickEle")
                    if (hideAfterClickEle) {
                      hideAfterClickEle.addEventListener("click", function() {
                          console.log("hideAfterClickEle clicked")
                          hideAfterClickEle.classList.add("atomicat-hidden");
                      })
                    }
                  }
                  if(hideOnComplete) {
                    const hideOnCompleteEle = document.querySelector(`.atomicat-hide-on-complete-${compKey}`);
                    console.log(hideOnCompleteEle, "hideOnCompleteEle")
                    if (hideOnCompleteEle) {
                      hideOnCompleteEle.addEventListener("animationend", function() {
                          console.log("hideOnCompleteEle animationend")
                          hideOnCompleteEle.classList.add("atomicat-hidden");
                      })
                    }
                  }
                  if(showItemsById) {
                    const showItemsByIdEle = document.querySelector(`.atomicat-show-hidden-item-${compKey}`);
                    if(eleType === "progressbar"){
                      showItemsByIdEle.addEventListener("animationend", function() {
                        atomiShowItems()
                      })
                    } else{
                      showItemsByIdEle.addEventListener("click", function() {
                        atomiShowItems()
                      })
                    }
                    function atomiShowItems() {
                      showItemsById.forEach((item) => {
                        const hiddenItem = document.querySelector(`#${item}`) || document.querySelector(`.${item}`);
                        if (hiddenItem) {
                          hiddenItem.classList.remove("atomicat-delay");
                        }
                      })
                    }
                  }
              });
    
          } catch (error) {
              console.log(error);
          }
      })();(function() {
          try {
              const animationList = [{"compKey":"5c82fdad-8efe-4647-bac7-f17f1f4852de","style":{"outer":{"order":{"mobile":"3"},"tooltip":{"desktop":"top: 50%; left: 100%; bottom: auto; right: auto; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); -webkit-transition: all .3s ease-in-out; transition: all .3s ease-in-out; margin-left: 10px; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);","arrow":{"desktop":"top: calc(50% - 5px); right: 100%; left: auto; bottom: auto; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); border-right-color: #555;","mobile":"top: calc(50% - 5px); right: 100%; left: auto; bottom: auto; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); border-right-color: #555;"},"mobile":"top: 50%; left: 100%; bottom: auto; right: auto; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); -webkit-transition: all .3s ease-in-out; transition: all .3s ease-in-out; margin-left: 10px; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);"},"entranceAnimation":{"desktop":"none"},"paddingTop":{"desktop":"24px"},"paddingBottom":{"mobile":"15px"},"boxShadow":"0px 0px 10px -100px rgba(0,0,0,0.5) "},"button":{"borderTopLeftRadius":{"desktop":"40px"},"borderTopRightRadius":{"desktop":"40px"},"borderBottomRightRadius":{"desktop":"40px"},"borderBottomLeftRadius":{"desktop":"40px"},"boxShadow":"0px 10px 22px -12px rgba(97, 206, 112, 1) ","border":"unset","fontSize":{"desktop":"16px"},"width":{"desktop":"342px"},"background":"rgba(0, 129, 255, 1)","animation":"atomicat-animation-pulse 2s infinite linear","hover":{"animation":"atomicat-animation-pulse 2s infinite linear","background":"rgba(0, 255, 29, 1)"},"color":"rgba(255, 255, 255, 1)"}},"misc":{"content":"QUERO DECIFRAR O APOCALIPSE","type":"button","tag":"a","href":"https://pay.hotmart.com/A97094682K?off=xg1616pq&checkoutMode=10","target":true}}];
    
              animationList.forEach((animationItem, index) => {
                const { type } = animationItem?.misc;
                const key = animationItem?.compKey?.slice(0, 7) || animationItem?.contKey?.slice(0, 7);
                const elementClass = type === "container" ? ".atomicat-container-" + key : ".atomicat-element-container-" + key;
                const targetElement = document.querySelector(elementClass);


                    const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                targetElement.style.opacity = 1;
                                targetElement.classList.add('atomicat-entrance-animation-' + key);
                            } else if(animationItem?.misc?.hideOffscreen) {
                                targetElement.classList.remove('atomicat-entrance-animation-' + key);
                                targetElement.style.opacity = 0;
                            }
                        });
                    });

                    observer.observe(targetElement);
              });
    
          } catch (error) {
              console.log(error);
          }
      })();
    (function() {
      function atomiShowNotification(e, t) {
        try {
          var n = document.getElementById("atomicat-snackbar");
          document.getElementById("atomicat-notification-name").innerText = e;
          
          n.classList.add("atomicat-show-notification");
          setTimeout(function () {
            n.classList.remove("atomicat-show-notification");
          }, 4e3);
        } catch (error) {
          console.log(error);
        }
      }
      function randomIntFromInterval(e, t) {
        try {
          return Math.floor(Math.random() * (t - e + 1) + e);
        } catch (error) {
          console.log(error);
        }
      }

      try {
        const names = ["Jose","Joao","Antonio","Francisco","Carlos","Paulo","Pedro","Lucas","Luiz","Marcos","Luis","Gabriel","Rafael","Daniel","Marcelo","Bruno","Eduardo","Felipe","Raimundo","Rodrigo","Manoel","Mateus","Andre","Fernando","Fabio","Leonardo","Gustavo","Guilherme","Leandro","Tiago","Anderson","Ricardo","Marcio","Jorge","Sebastiao","Alexandre","Roberto","Edson","Diego","Vitor","Sergio","Claudio","Matheus","Thiago","Geraldo","Adriano","Luciano","Julio","Renato","Alex","Vinicius","Rogerio","Samuel","Ronaldo","Mario","Flavio","Douglas","Igor","Davi","Manuel","Jeferson","Cicero","Victor","Miguel","Robson","Mauricio","Danilo","Henrique","Caio","Reginaldo","Joaquim","Benedito","Gilberto","Marco","Alan","Nelson","Cristiano","Elias","Wilson","Valdir","Emerson","Luan","David","Renan","Severino","Fabricio","Mauro","Jonas","Gilmar","Jean","Fabiano","Wesley","Diogo","Adilson","Jair","Alessandro","Everton","Osvaldo","Gilson","Willian","Joel","Silvio","Helio","Maicon","Reinaldo","Pablo","Artur","Vagner","Valter","Celso","Ivan","Cleiton","Vanderlei","Vicente","Arthur","Milton","Domingos","Wagner","Sandro","Moises","Edilson","Ademir","Adao","Evandro","Cesar","Valmir","Murilo","Juliano","Edvaldo","Ailton","Junior","Breno","Nicolas","Ruan","Alberto","Rubens","Nilton","Augusto","Cleber","Osmar","Nilson","Orlando","Hugo","Otavio","Vinicios","Italo","Wilian","Alisson","Aparecido","Maria","Ana","Francisca","Antonia","Adriana","Juliana","Marcia","Fernanda","Patricia","Aline","Sandra","Camila","Amanda","Bruna","Jessica","Leticia","Julia","Luciana","Vanessa","Mariana","Gabriela","Vera","Vitoria","Larissa","Claudia","Beatriz","Rita","Luana","Sonia","Renata","Eliane","Josefa","Simone","Natalia","Cristiane","Carla","Debora","Rosangela","Jaqueline","Rosa","Aparecida","Daniela","Marlene","Terezinha","Raimunda","Andreia","Fabiana","Lucia","Raquel","Angela","Rafaela","Joana","Luzia","Elaine","Regina","Daniele","Sueli","Daiane","Alessandra","Isabel","Sara","Bianca","Flavia","Erica","Viviane","Silvana","Priscila","Paula","Luiza","Tereza","Isabela","Marta","Caroline","Janaina","Laura","Marli","Tatiane","Marina","Silvia","Monica","Tais","Michele","Solange","Edna","Fatima","Helena","Cristina","Alice","Carolina","Rosana","Andressa","Celia","Valeria","Eliana","Sabrina","Andrea","Tania","Barbara","Thais","Denise","Roseli","Gisele","Marilene","Katia","Eva","Milena","Eduarda","Elisangela","Vilma","Geovana","Luciene","Tamires","Tatiana","Roberta","Elza","Talita","Marcela","Pamela","Vania","Irene","Josiane","Livia","Cintia","Ivone","Lais","Benedita","Sebastiana","Taina","Joice","Mirian","Elizabete","Angelica","Gabriele","Brenda","Veronica","Rosilene","Karina","Nair","Neusa","Margarida","Neuza","Neide","Raissa","Maiara","Lorena","Franciele","Samara","Lilian","Janete"]

        const g = randomIntFromInterval(0, names.length - 1);
        atomiShowNotification(names[g], "[atomicat-notification-msg]");
        setInterval(() => {
          let t = randomIntFromInterval(0, names.length - 1);
          atomiShowNotification(names[t], "[atomicat-notification-msg]");
        }, 8e3);
      } catch (error) {
        console.log(error);
      }
    })();