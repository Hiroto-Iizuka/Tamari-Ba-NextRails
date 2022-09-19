import React from 'react';
// import '../styles/homes.scss'

export const Home = (props) => {
  return (
    <>
      {/* Masthead */}
      <div className="flame">
        <div className="main-container overlay">
          <div className="container px-4 px-lg-5 h-100">
            <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-8 align-self-end">
                  <h1 className="title-text">Tamari-Ba</h1>
                  <hr className="divider" />
              </div>
              {/* <div class="col-lg-8 align-self-baseline">
                <p class="sub-text">『Tamari-Ba』は全国のバイク乗りのおすすめスポットを投稿するWEBアプリ。<br>バイク乗りのTamari-Baで自分の好きな峠、シーサイド、道の駅などについて語ろう。</p>
                <% if user_signed_in? %>
                  <%= link_to "アプリトップへ", roads_path, class: "btn warning-btn" %>
                <% else %>
                  <div class="my-3">
                    <%= link_to "ログインはこちら", user_session_path, class: "btn warning-btn" %>
                  </div>
                  <div class="my-3">
                    <%= link_to "ゲストログイン", users_guest_sign_in_path, method: :post, class: "btn warning-btn" %>
                  </div>
                <% end %>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <section className="page-section content-list" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col text-center">
                  <h2 className="title-text mt-0 pt-5">What is Tamari-Ba?</h2>
              </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="title-text py-5">最新の投稿</h2>
        </div>
        
        <div className="card-wrapper">
          {props.roads.map((road) =>
          <div className="card" id={road.user_id}>
            <div className="card-body">
              <h5 className="card-title">{road.title}</h5>
              <p className="card-content">{road.description}</p>
            </div>
            <div className="d-flex justify-content-between mx-3">
              <p className="user-name">by {road.user_id}</p>
            </div>
          </div>
          )}
        </div>
          {/* <% @roads_latest3.each do |road| %>
            <div class="card">
              <div class="card-image">

                <% if road.road_images.attached? %>
                  <%= link_to image_tag(road.road_images.first, class: "show-img-link", data: {"turbolinks"=>false}), road_path(road) %>
                <% else %>
                  <%= link_to image_tag("noimage-road.png", class:"show-img-link", data: {"turbolinks"=>false}), road_path(road) %>
                <% end %>
              </div>  

              <div class="card-body">
                <h5 class="card-title"><%= link_to "#{road.title}", road_path(road), {class: "show-link", data: {"turbolinks"=>false}} %></h5>
                <p class="card-content"><%= road.description.truncate(30, omission: '...') %></p> 
              </div>
              <div class="d-flex justify-content-between mx-3">
                <p class="user-name">by <%= link_to "#{road.user.name}", user_path(road.user), {class: "user-link"} %></p>
              </div>
            </div>
          <% end %>
        </div> */}

        <div className="text-center">
          <h2 className="title-text py-5">機能紹介</h2>
        </div>

        {/* <section id="feat">
          <div class="container">
            <div class="row features">
              <div class="col-md-4 text-center wow fadeInUp" data-wow-delay="100ms">
                <%= image_tag("map.png", class: "feature-image") %>
                <h4 class="title-text">Google Maps API</h4>
                <p class="sub-text">マップ上に自分の好きなスポットにマーカーを立てて共有可能です。</p>
              </div>
              <div class="col-md-4 text-center wow fadeInUp" data-wow-delay="300ms">
                <%= image_tag("image.png", class: "feature-image") %>
                <h4 class="title-text">画像投稿</h4>
                <p class="sub-text">画像の投稿もできます。１投稿に複数登録でき、１枚目が投稿のサムネイル画像になります。</p>
              </div>
              <div class="col-md-4 text-center wow fadeInUp" data-wow-delay="500ms">
                <%= image_tag("description.png", class: "feature-image") %>
                <h4 class="title-text">タイトル/説明</h4>
                <p class="sub-text">投稿にはタイトル、説明が付けられます。目を引くタイトルを付け、そのスポットについて熱く語れます。</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section id="feat">
          <div class="container">
            <div class="row features">
              <div class="col-md-4 text-center wow fadeInUp" data-wow-delay="100ms">
                <%= image_tag("search.png", class: "feature-image") %>
                <h4 class="title-text">検索機能</h4>
                <p class="sub-text">検索機能を搭載しています。気になるスポットを検索しましょう。</p>
              </div>
              <div class="col-md-4 text-center wow fadeInUp" data-wow-delay="300ms">
                <%= image_tag("like.png", class: "feature-image") %>
                <h4 class="title-text">いいね機能</h4>
                <p class="sub-text">お気に入りの投稿にはいいねができます。好きな場所を見つけたらいいねしましょう。</p>
              </div>
              <div class="col-md-4 text-center wow fadeInUp" data-wow-delay="500ms">
                <%= image_tag("comments.png", class: "feature-image") %>
                <h4 class="title-text">コメント機能</h4>
                <p class="sub-text">各投稿にはコメントを残せます。もし共感できるスポットがあれば語り合いましょう。</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* <div class="text-center pb-5">
          <h2 class="title-text pt-5 pb-2">新規投稿</h2>
          <p class="sub-text">検索で目的のエリアをすぐに表示でき、任意の箇所にマーカーを立てて投稿ができます。</p>
          <%= image_tag("new_road.png", class: "col-xs-4 col-md-6 col-lg-4") %>
        </div> */}

        {/* <div class="text-center pb-5">
          <h2 class="title-text pt-5 pb-2">投稿詳細</h2>
          <p class="sub-text">投稿詳細画面では、登録された座標にマーカーを設置されたマップが表示されます。</p>
          <%= image_tag("post-show-sample.png", class: "col-xs-4 col-md-6 col-lg-4") %>
        </div> */}

      </section>

      {/* Footer */}
      <footer className="bg-light py-5">
          <div clasNames="container px-4 px-lg-5"><div class="small text-center text-muted">Copyright &copy; 2021 - Hiroto Iizuka</div></div>
      </footer>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {method: "GET"});
  const json = await response.json();

  return {
    props: {
      roads: json
    },
  };
}

export default Home;
