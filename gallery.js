let gallery = [
    {
       name: 'Aquatic Invasion',
       class: 'portrait',
       src: '1.jpg',
       alt: 'Pattern painting resembling jellyfish.',
       artist: 'Jamie Miller',
       details: `&quot;Aquatic Invasion&quot; is a 12x18 acrylic on canvas painting.`,
       pre: ''
    },
    {
       name: 'Citrus Sunset',
       class: 'portrait',
       src: '2.jpg',
       alt: 'Painting of tree with bright orange sunset.',
       artist: 'Jamie Miller',
       details: `&quot;Citrus Sunset&quot; is a 4x6 acrylic on cardstock painting.`,
       pre: ''
    },
    {
       name: 'Desert Sands',
       class: 'landscape',
       src: '3.jpg',
       alt: 'Painting of desert sand dunes and blue sky.',
       artist: 'Jamie Miller',
       details: `&quot;Desert Sands&quot; is a 4x6 acrylic on cardstock painting.`,
       pre: ''
    },
    {
       name: 'Stained Glass Star',
       class: 'landscape',
       src: '4.jpg',
       alt: 'Digital geometric art printed on glossy photo paper.',
       artist: 'Jamie Miller',
       details: `&quot;Stained Glass Star&quot; is a 4x6 digital print on glossy photo paper.`,
       pre: ''
    },
    {
       name: 'Digital River',
       class: 'landscape',
       src: '5.jpg',
       alt: 'Digital river scene created using GIMP',
       artist: 'Jamie Miller',
       details: `&quot;Digital River&quot; is an unprinted digital image created using <a href='https://www.gimp.org'>GIMP</a>`,
       pre: ''
    },
    {
       name: 'Oh Snow Yummy!',
       class: 'portrait',
       src: '6.jpg',
       alt: 'Picture of cake that looks like a snowman.',
       artist: 'Jamie Miller',
       details: `&quot;Oh Snow Yummy!&quot; <em>was</em> a white cake with a buttercream decorator frosting.`,
       pre: ''
    },
    {
       name: 'SpongeBob SquareCake',
       class: 'portrait',
       src: '7.jpg',
       alt: 'Picture of cake that looks like Spongebob Squarepants.',
       artist: 'Jamie Miller',
       details: `&quot;SpongeBob SquareCake&quot; <em>was</em> a yellow cake with a buttercream decorator frosting.`,
       pre: ''
    },
    {
       name: 'Gone Quick!',
       class: 'landscape',
       src: '8.jpg',
       alt: 'Picture of cake that looks like Sonic the Hedgehog.',
       artist: 'Jamie Miller',
       details: `&quot;Gone Quick!&quot; <em>was</em> a chocolate cake with a buttercream decorator frosting.`,
       pre: ''
    },
    {
       name: 'It Must Be Pretty',
       class: 'portrait',
       src: '9.jpg',
       alt: 'Oil painting of flowers on cover of 3-ring binder.',
       artist: 'Jamie Miller',
       details: `&quot;It <em>Must</em> Be Pretty&quot; is an oil painting on the cover of a 3-ring binder.  If I must carry it...`,
       pre: ''
    },
    {
       name: 'First Rose',
       class: 'portrait',
       src: '10.jpg',
       alt: 'Pencil sketch of rose.',
       artist: 'Jamie Miller',
       details: `&quot;First Rose&quot; is a 5x8 pencil sketch.  It is the drawing that started it all!`,
       pre: ''
    },
    {
       name: 'Puppet on a String',
       class: 'portrait',
       src: '11.jpg',
       alt: 'Pencil sketch of a marionette.',
       artist: 'Jamie Miller',
       details: `&quot;Puppet on a String&quot; is a 5x8 pencil sketch.  It is accompanied by a poem of the same name.`,
       pre: '<h3>Puppet on a String</h3>\nA feeling of control\nis what I really need\nInstead you take my soul\nNo dignity for me\n\nYou make me dance to music\nWith no rhythm or no beat\nYou build me up with praise\nTo knock me off my feet\n\nYour puppet on a string\nfulfilling your hearts desire\nthat\'s all I\'ll ever be\nhanging from this wire\n\nLike Pinocchio and his dreams\nof becoming a little boy\nI need to be more in life\nthan someone\'s little toy.',
    },
    {
       name: 'The Island',
       class: 'landscape',
       src: '12.jpg',
       alt: 'Pencil sketch of an island.',
       artist: 'Jamie Miller',
       details: `&quot;The Island&quot; is a pencil sketch.  It also is accompanied by a poem of the same name.`,
       pre: '<h3>The Island</h3>To look upon this island\nfrom far above the trees\nyou think you\'ve found the perfect place\nfor heaven on earth to be\n\nYou move in a little closer\nto walk along its beach\nto feel the sand between your toes\nit\'s all within your reach\n\nYou decide to make this island\na place you now call home\nit\'s everything you ever wanted\na shelter from the storm\n\nBut the storm is never over\non this little island in the sea\nthe very things that drew you near\nare the reasons why you leave\n\nThe branches of the trees\nstretching outward for a hand\nnever reaching far enough\nto escape this little land\n\nThe water on the beaches\nwhere you loved to swim and play\nkept the island to itself\nas it slowly washed away.'
    },
    {
       name: 'Eye See You',
       class: 'landscape',
       src: '13.jpg',
       alt: 'Pencil and ink sketch of an eyeball created using a spirograph.',
       artist: 'Jamie Miller',
       details: `&quot;Eye See You&quot; is an 8&half;X11 pencil and ink sketch.  It was created using a <a href='https://www.playmonster.com/brands/spirograph/'>spirograph.</a>`,
       pre: ''
    },
    {
       name: 'Wrapped in Peace',
       class: 'portrait',
       src: '14.jpg',
       alt: 'Pencil sketch of peace symbol with beads woven through it.',
       artist: 'Jamie Miller',
       details: `&quot;Wrapped in Peace&quot; is a 5x8 pencil sketch.`,
       pre: ''
    },
    {
       name: 'Lotus Flower',
       class: 'portrait',
       src: '15.jpg',
       alt: 'Pencil sketch of lotus flower.',
       artist: 'Jamie Miller',
       details: `&quot;Lotus Flower&quot; is a 8x10 pencil sketch.`,
       pre: ''
    },
    {
       name: 'Lotus Gift',
       class: 'portrait',
       src: '16.jpg',
       alt: 'Pencil sketch of person receiving lotus flower gift.',
       artist: 'Jamie Miller',
       details: `&quot;Lotus Gift&quot; is a 8x10 pencil sketch.`,
       pre: ''
    },
    {
       name: 'Rainbow Snowflake',
       class: 'portrait',
       src: '17.jpg',
       alt: 'Colorful digital image of snowflake created using ZenTrails',
       artist: 'Jamie Miller',
       details: `&quot;Rainbow Snowflake&quot; is an unprinted digital image created using <a href='https://store.steampowered.com/app/1418570/Zen_Trails/'>ZenTrails</a>`,
       pre: ''
    },
    {
       name: 'First Day of School',
       class: 'portrait',
       src: '18.jpg',
       alt: 'Pencil sketch of mother kissing child.',
       artist: 'Jamie Miller',
       details: `&quot;First Day of School&quot; is an 8X10 pencil sketch.`,
       pre: ''
    },
    {
      name: 'Play at Second',
      class: 'portrait',
      src: '19.jpg',
      alt: 'Pencil sketch of softball player.',
      artist: 'Jamie Miller',
      details: `&quot;Play at Second&quot; is an 8X10 pencil sketch.`,
      pre: ''
   },
   {
      name: 'Strawberry',
      class: 'portrait',
      src: '20.jpg',
      alt: 'Painting of strawberry.',
      artist: 'Jamie Miller',
      details: `&quot;Strawberry&quot; is an 9X12 acrylic on paper painting.`,
      pre: ''
   }
 ];