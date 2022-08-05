JG.repeat(80, 10, {
    id: JG.objectId(),
    date:moment(JG.date(new Date(1988, 0, 1), new Date(1995, 0, 1))).format('YYYY-MM-DD'),
    title: JG.loremIpsum({ units: 'words', count: 8 }),
    except: JG.loremIpsum({ units: 'sentence', count: 1 }),
    country: JG.country(),
    city: JG.city(),
    pillar: JG.random('More for People', 'More for Planet','More for Progress','More for Philantrophy'),
    location: {
        lat: JG.floating(-90, 90, 6),
        long: JG.floating(-180, 180, 6),
      },
    image: "https://picsum.photos/200/300?random="+JG.index(1),
    link: "https://webhelp.com"  
  });