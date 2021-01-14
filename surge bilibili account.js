let body = $response.body;

body = JSON.parse(body);
body["data"]["sections_v2"] = [
  {
    items: [
      {
        id: 397,
        title: "历史记录",
        icon:
          "http://i0.hdslb.com/bfs/archive/8385323c6acde52e9cd52514ae13c8b9481c1a16.png",
        uri: "bilibili://user_center/history",
      },
      {
        id: 398,
        title: "我的收藏",
        icon:
          "http://i0.hdslb.com/bfs/archive/d79b19d983067a1b91614e830a7100c05204a821.png",
        uri: "bilibili://user_center/favourite",
      },
      {
        id: 396,
        title: "离线缓存",
        icon:
          "http://i0.hdslb.com/bfs/archive/5fc84565ab73e716d20cd2f65e0e1de9495d56f8.png",
        uri: "bilibili://user_center/download",
      },
      {
        id: 399,
        title: "稍后再看",
        icon:
          "http://i0.hdslb.com/bfs/archive/63bb768caa02a68cb566a838f6f2415f0d1d02d6.png",
        need_login: 1,
        uri: "bilibili://user_center/watch_later",
      },
    ],
    style: 1,
    button: {},
  },
  {
    title: "创作中心",
    items: [
      {
        need_login: 1,
        display: 1,
        id: 171,
        title: "创作首页",
        global_red_dot: 1,
        uri: "bilibili://uper/homevc",
        icon:
          "http://i0.hdslb.com/bfs/archive/d3aad2d07538d2d43805f1fa14a412d7a45cc861.png",
      },
      {
        need_login: 1,
        display: 1,
        id: 172,
        title: "稿件管理",
        global_red_dot: 1,
        uri: "bilibili://uper/user_center/archive_list",
        icon:
          "http://i0.hdslb.com/bfs/archive/97acb2d8dec09b296a38f7f7093d651947d13b91.png",
      },
    ],
    style: 1,
    button: {
      icon:
        "http://i0.hdslb.com/bfs/archive/205f47675eaaca7912111e0e9b1ac94cb985901f.png",
      style: 1,
      url: "bilibili://uper/user_center/archive_selection",
      text: "发布",
    },
  },
  {
    title: "推荐服务",
    items: [
      {
        id: 401,
        title: "看视频免流量",
        icon:
          "http://i0.hdslb.com/bfs/archive/393dd15a4f0a149e016cd81b55bd8bd6fe40882c.png",
        uri: "bilibili://user_center/free_traffic",
      },
      {
        id: 402,
        title: "个性装扮",
        icon:
          "http://i0.hdslb.com/bfs/archive/0bcad10661b50f583969b5a188c12e5f0731628c.png",
        uri: "https://www.bilibili.com/h5/mall/home?navhide=1&from=myservice",
      },
      {
        id: 514,
        title: "反馈论坛",
        icon:
          "http://i0.hdslb.com/bfs/archive/551a39b7539e64d3b15775295c4b2e13e5513b43.png",
        need_login: 1,
        uri:
          "bilibili://following/activity_group_landing/7?page_id=262&tab_module_id=19",
      },
    ],
    style: 1,
    button: {},
  },
  {
    //"title": "其他设置",
    items: [
      {
        id: 410,
        title: "设置",
        icon:
          "http://i0.hdslb.com/bfs/archive/e932404f2ee62e075a772920019e9fbdb4b5656a.png",
        uri: "bilibili://user_center/setting",
      },
    ],
    style: 2,
    button: {},
  },
];
body = JSON.stringify(body);
$done({ body });
