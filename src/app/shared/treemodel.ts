export class TreeNode {
  public description: string;
  public rule: String;
  public childrens: Array<TreeNode>;
}

export let nodeList = {
  description: 'Постановление соcтавленно',
  rule: null,
  childrens: [{
      description: 'Включите запись диктофона',
      rule: 'Нет',
      childrens: [{
          description: 'Ждите когда зачитают право на адвоката ',
          rule: 'Далее',
          childrens: [{
              description:'Скажите полицейскому что хотите набрать адвоката тел. 0936261053 ',
              rule: 'Зачитано',
              childrens: [{
                  description: 'Попросите перенести рассмотрение дела на следующую неделю',
                  rule: 'Далее',
                  childrens: [{
                      description: 'Запишите данные полицейского звание должность подразделение. Узнайте адрес електроной почты его подразделения.',
                      rule: 'Разрешил',
                      childrens: [{
                          description: '',
                          rule: 'Перейти к заполнению форм',
                          link: '/protocolFrom/',
                          childrens: null,
                      }],
                  },{
                      description: 'Если есть возможность напишите в графе (пояснення до протоколу) - Отказал в заяве про перенос рассмотрения дела по необоснованым мотивам',
                      rule: 'Отказал',
                      childrens: null,
                    },
                  ],
                },
              ],
            },
            {
              description:
                'В графе “Право за ст.268 КУпАП розьясненно” напишите не разьясненно ',
              rule: 'Небыло зачитано',
              childrens: [
                {
                  description:
                    'Если после этого права вам зачитали права то замечательно. Сделаете фото оригинала протокола если копия плохая.',
                  rule: 'Далее',
                  childrens: null, //функция перехода на ответы по ошибкам в протоколе
                },
              ],
            },
          ],
        },
      ],
    },
    {
      decision: 'Включите запись диктофона',
      rule: 'Да',
      childrens: null,
    },
  ],
};
