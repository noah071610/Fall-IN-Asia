"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInitialData = void 0;
const Countries_1 = require("../../entities/Countries");
const Moments_1 = require("../../entities/Moments");
const Stories_1 = require("../../entities/Stories");
const Users_1 = require("../../entities/Users");
class CreateInitialData {
    async run(factory, connection) {
        await connection
            .createQueryBuilder()
            .insert()
            .into(Countries_1.Countries)
            .values([
            {
                id: 1,
                code: 'KR',
                name: '대한민국',
                continent: '동북아시아',
                image_src: 'https://images.unsplash.com/photo-1424873380396-9580028d74db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
                flag_src: 'https://w.namu.la/s/43a07e65f573eb41fffe67ac0d1008fa73b5c7a04a004ff9004ddf0680524c5c5bd8a30c724fd7966bd7d3a2f60d0bd17c3cc159dd41f704f9b6dc188a21346db82d0ab77673676c9ecdf2aedb3e49f7119beff54a709d8fffa6241fce4cd3a4',
            },
            {
                id: 2,
                code: 'JP',
                name: '일본',
                continent: '동북아시아',
                image_src: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                flag_src: 'https://www.mofa.go.kr/upload/bbs/NN001/20171026052738683.gif',
            },
            {
                id: 3,
                code: 'CN',
                name: '중국',
                continent: '동북아시아',
                image_src: 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                flag_src: 'http://www.aseanexpress.co.kr/data/photos/20200414/art_15858376908225_c70c9d.png',
            },
            {
                id: 4,
                code: 'TW',
                name: '대만',
                continent: '동북아시아',
                image_src: 'https://images.unsplash.com/photo-1598935898639-81586f7d2129?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                flag_src: 'https://w.namu.la/s/183004771c3ffdb5d87f9d8bb979006122a3cc153296d4a32caa605333358df9f6633bddee6114e7c9fceaff414f13923837c5c9a1d61ed63f68a7a0557c4bf20dca6e8309d3f11f5a059798bf0dfa30939e030dd691d7f614c71b5c59606f70',
            },
            {
                id: 5,
                code: 'HK',
                name: '홍콩',
                continent: '동북아시아',
                image_src: 'https://images.unsplash.com/photo-1563042251-bee9036c5bac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                flag_src: 'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/250/20201125_221628332.gif',
            },
            {
                id: 6,
                code: 'TH',
                name: '태국',
                continent: '동남아시아',
                image_src: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1023&q=80',
                flag_src: 'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/214/20201125_215627480.gif',
            },
            {
                id: 7,
                code: 'VN',
                name: '베트남',
                continent: '동남아시아',
                image_src: 'https://images.unsplash.com/photo-1536086845112-89de23aa4772?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                flag_src: 'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/92/20201125_212908389.gif',
            },
            {
                id: 8,
                code: 'SG',
                name: '싱가포르',
                continent: '동남아시아',
                image_src: 'https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80',
                flag_src: 'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/133/20201125_213857371.gif',
            },
            {
                id: 9,
                code: 'MY',
                name: '말레이시아',
                continent: '동남아시아',
                image_src: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1045&q=80',
                flag_src: 'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/66/20201125_212428115.gif',
            },
            {
                id: 10,
                code: 'ID',
                name: '인도네시아',
                continent: '동남아시아',
                image_src: 'https://images.unsplash.com/photo-1577547476482-63dc54e36e26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                flag_src: 'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/175/20201125_215019677.gif',
            },
            {
                id: 11,
                code: 'KH',
                name: '캄보디아',
                continent: '동남아시아',
                image_src: 'https://images.unsplash.com/photo-1566706546199-a93ba33ce9f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
                flag_src: 'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/194/20201125_215315869.gif',
            },
            {
                id: 12,
                code: 'PH',
                name: '필리핀',
                continent: '동남아시아',
                image_src: 'https://images.unsplash.com/photo-1573191055128-94ca66d6efb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
                flag_src: 'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/237/20201125_220304255.gif',
            },
            {
                id: 13,
                code: 'LA',
                name: '라오스',
                continent: '동남아시아',
                image_src: 'https://images.unsplash.com/photo-1552058185-b7e8f6744229?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
                flag_src: 'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/47/20201125_211834641.gif',
            },
            {
                id: 14,
                code: 'MM',
                name: '미얀마',
                continent: '동남아시아',
                image_src: 'https://images.unsplash.com/photo-1490077476659-095159692ab5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1033&q=80',
                flag_src: 'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/82/20201125_212709045.gif',
            },
            {
                id: 15,
                code: 'IN',
                name: '인도',
                continent: '남아시아',
                image_src: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
                flag_src: 'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/174/20201125_215008384.gif',
            },
            {
                id: 16,
                code: 'LK',
                name: '스리랑카',
                continent: '남아시아',
                image_src: 'https://images.unsplash.com/photo-1612862862126-865765df2ded?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80',
                flag_src: 'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/125/20201125_213727531.gif',
            },
            {
                id: 17,
                code: 'NP',
                name: '네팔',
                continent: '남아시아',
                image_src: 'https://images.unsplash.com/photo-1617469165786-8007eda3caa7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                flag_src: 'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/35/20201125_211632803.gif',
            },
        ])
            .execute();
        await connection
            .createQueryBuilder()
            .insert()
            .into(Users_1.Users)
            .values([
            {
                id: 1,
                name: 'Fall IN Asia - 공식',
                admin: true,
                icon: 'https://user-images.githubusercontent.com/74864925/129441338-e5013a60-20c8-4e19-8149-012bea46163f.png',
                introduce: '안녕하세요 Fall IN Asia 공식계정입니다. Fall IN Asia에서 관광,여행에 관한 많은 정보를 공유하고 얻어가요~🥰 (관광통역안내사 일본어와 영어🥇 , 그리고 국외여행인솔자 자격증 보유🥈 , 통역가이드 및 관광여행업 종사경험有🥉)',
                email: 'noah071610@naver.com',
                password: '$2b$12$PuYL0uca378d0Naba6WNTuF2zpaxi30Ppk6s9HCg3lV7wUjICQLZm',
            },
            {
                id: 2,
                name: '일본가고싶다',
                admin: false,
                introduce: '안녕하세요 일본가고싶다입니다.',
                icon: 'https://yt3.ggpht.com/ytc/AKedOLS5TiRpoaiF3pvwvFKdCaKzRAh9k4MmvSScG2XC_g=s48-c-k-c0x00ffffff-no-rj',
                email: 'sanghyun0804@gmail.com',
                password: '$2b$12$MTQHyw.HdFfp7/uYYENpku6waWDYCzfn4t5ErEp.rDWZ6YpzHoKSe',
            },
            {
                id: 3,
                name: '랑이',
                admin: false,
                introduce: '안녕하세요 랑이입니다.',
                email: 'rangloverrang98@gmail.com',
                icon: 'https://yt3.ggpht.com/ytc/AKedOLRU7ZduL0Y7Gcnh6qCqnwX4pTemMO17Tq0WPNXL-A=s48-c-k-c0x00ffffff-no-rj',
                password: '$2b$12$MTQHyw.HdFfp7/uYYENpku6waWDYCzfn4t5ErEp.rDWZ6YpzHoKSe',
            },
            {
                id: 4,
                name: 'Kim Sanghyun',
                admin: false,
                introduce: '안녕하세요 Kim Sanghyun입니다.',
                email: 'pillggxgo3525@naver.com',
                icon: 'https://yt3.ggpht.com/ytc/AKedOLS8MbEHxysu3gaYJjJJjF1SdEp11i-tlVCbKSw5=s48-c-k-c0x00ffffff-no-rj',
                password: '$2b$12$MTQHyw.HdFfp7/uYYENpku6waWDYCzfn4t5ErEp.rDWZ6YpzHoKSe',
            },
            {
                id: 5,
                name: '가비',
                admin: false,
                introduce: '여행을 좋아하는 가비.',
                email: 'gabi030819@gmail.com',
                icon: 'https://yt3.ggpht.com/ytc/AKedOLQDnqDwksB8XFZRCyE9CfJE2LcSstZzgYSr57OaDg=s48-c-k-c0x00ffffff-no-rj',
                password: '$2b$12$MTQHyw.HdFfp7/uYYENpku6waWDYCzfn4t5ErEp.rDWZ6YpzHoKSe',
            },
            {
                id: 6,
                name: '내이름은화성',
                admin: false,
                introduce: '안녕하세요 내이름은화성입니다.',
                email: '8pjparasjhambd@bartolemo.space',
                icon: 'https://yt3.ggpht.com/ytc/AKedOLRaj9fM79Cmawg5BHb_H9fJzJtb9qGi_kNpVztGiA=s48-c-k-c0x00ffffff-no-rj',
                password: '$2b$12$MTQHyw.HdFfp7/uYYENpku6waWDYCzfn4t5ErEp.rDWZ6YpzHoKSe',
            },
            {
                id: 7,
                name: '방랑하는아제',
                admin: false,
                introduce: '안녕하세요 방랑하는아제입니다.',
                email: 'ukurdist5f@naver.com',
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3Owe2m5S_JZTxgW2ClloSDcvlFAxaEWV7A&usqp=CAU',
                password: '$2b$12$MTQHyw.HdFfp7/uYYENpku6waWDYCzfn4t5ErEp.rDWZ6YpzHoKSe',
            },
            {
                id: 8,
                name: '석진윤',
                admin: false,
                introduce: '안녕하세요 석진윤입니다.',
                email: 'droman.hlinka.14w@googl.win',
                icon: 'https://yt3.ggpht.com/ytc/AKedOLT42ED1MYEN4Uvc2lhw-bvIYDozC5j0LeEmHw=s48-c-k-c0x00ffffff-no-rj',
                password: '$2b$12$MTQHyw.HdFfp7/uYYENpku6waWDYCzfn4t5ErEp.rDWZ6YpzHoKSe',
            },
            {
                id: 9,
                name: '낭낭펀치',
                admin: false,
                introduce: '안녕하세요 낭낭펀치입니다.',
                email: 'aahmed_mahmed78@sanghoonghi.com',
                icon: 'https://yt3.ggpht.com/ytc/AKedOLR6OsK71gerI-ig7VxMJ_f9p5PhL4LJMXKBnDCmzlh8xA=s48-c-k-c0x00ffffff-no-rj',
                password: '$2b$12$MTQHyw.HdFfp7/uYYENpku6waWDYCzfn4t5ErEp.rDWZ6YpzHoKSe',
            },
            {
                id: 10,
                name: 'Golden Night',
                admin: false,
                introduce: '안녕하세요 Golden Night입니다.',
                email: 'xanouar.abid.17n@rtfaz.site',
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5I6DOPdHxmv-zp5dpPYi-D734t32ogqGC5g&usqp=CAU',
                password: '$2b$12$MTQHyw.HdFfp7/uYYENpku6waWDYCzfn4t5ErEp.rDWZ6YpzHoKSe',
            },
        ])
            .execute();
        await connection
            .createQueryBuilder()
            .insert()
            .into(Moments_1.Moments)
            .values([
            {
                id: 1,
                code: 'JP',
                content: '7월이나 8월쯤에 일본여행 가고 싶은데 금지인가요?<br> 자가격리도 해야되나요?',
                country: 2,
                user: 2,
                type: '한인 커뮤니티',
            },
            {
                id: 2,
                code: 'KR',
                content: '<p>여수에서 놀만한곳 여수 관광지 좋은곳 여수 돌산공원 근처 괜찮은곳 추천해주세요!</p> <br> 여수 여행 코스 제발좀 알려주세요 여행자님들.',
                country: 1,
                user: 2,
                type: '여행정보 공유',
            },
            {
                id: 3,
                code: 'JP',
                content: '일본 여행갈때 기내에서 작성하는 표에서 일본에 체류할 기간을 ~정확히~ 표기하셔야합니다.<br>만약 나중에 워킹홀리데이비자를 할때 문제가될수있습니다 😥😥😥<br><br>반드시 숙지하세요!!',
                country: 2,
                user: 1,
                type: '여행정보 공유',
            },
            {
                id: 4,
                code: 'KR',
                content: '<h2>누가 도움좀 주세요!</h2>친구들이랑 제주도놀러갈때 미리 정해둘려고<br>제주도숙박 알아보고 있는데 싼곳있으면 바로 픽할려구용!<br>호텔이나 펜션, 모텔 제주도숙박으로 괜찮은 곳이면 다 좋아요<br>숙소안이 깔끔하거나 접근성좋은 위치면 좋겠어요! <br>제주도숙박하기 좋은 곳 다양하게 알려주세요~<br>',
                country: 1,
                user: 3,
                type: '여행정보 공유',
            },
            {
                id: 5,
                code: 'JP',
                content: '학교졸업전에 일본취업비자를 받으려고하는데요 비자변경 신청을 하는건가요? <br>취업비자 신청을 하면되는건가요?출입국관리소에 들어가서 봐도 비자에 대해 잘몰라서 어렵네요..',
                country: 2,
                user: 5,
                type: '한인 커뮤니티',
            },
            {
                id: 6,
                code: 'TH',
                content: '<h2>태국 가서 할일</h2><p>1. gmm 빌딩 스타벅스에서 커피마시기</p><br/><p>2. gmm 올라가서 애들 굿즈사기</p><br/><p>3. 투게더 대학 탐방 하고 사진찍기</p><br/><p>4. 애들이 간 밥집 가서 밥먹기</p><br/><p>5. 드럭스 스토어가서 해들 화장품 사기</p><br/><p>6. 편의점 가서 오이시 마마 먹기</p><br/><p>7. 애들 행사에 놀러가기</p><br/><p>8. 애들 사진찍기</p><br/><p>9. 애들한테 말걸기</p>',
                country: 6,
                user: 4,
                type: '여행정보 공유',
            },
            {
                id: 7,
                code: 'TH',
                content: '태국여행 관련 사기,보이스피싱이 급증하고 있습니다. 항상 여행시에는 안전이 우선입니다. http://ozzye.blog.me/30188224296',
                country: 6,
                user: 1,
                type: '사기 경보',
            },
            {
                id: 8,
                code: 'VN',
                content: '<p><strong>혹시 베트남 다낭 추천하시나요? 코로나 끝나면 가보고싶은데 정보가 없네요</strong></p><p><br></p><p>다낭 vs 하노이 vs 호치민 셋중에 고민중이에요..</p><p><br></p><p>그리고 쌀국수 맛집도 있으면 알려주세요!!!!</p>',
                country: 7,
                user: 9,
                type: '여행정보 공유',
            },
        ])
            .execute();
        await connection
            .createQueryBuilder()
            .insert()
            .into(Stories_1.Stories)
            .values([
            {
                id: 1,
                code: 'TH',
                region: 'Bangkok, Bangkok, Thailand',
                lat: 13.75,
                lng: 100.517,
                thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjx7eqrlQ1ZFcLWIAvC7zMhMgPMybMdhxAw&usqp=CAU',
                title: '방콕여행 명소 맛집 베스트7 : 태국 방콕여행 일정',
                content: `<strong>제가 너무너무나 사랑하는 도시인 태국 방콕 의 명소&맛집 BEST 7 를 소개해드려요 ♥</strong><br>
            아직 못 가본 여행지가 많아서 다녀왔던 곳 보단 안 가본 여행지 가는 걸 선호하는 편인데
            <br>
            저에게 태국, 특히나 방콕은 기회가 되면 가도가도 또 가고싶은 여행지 중 하나인 곳이에요!<br>
            이처럼 너무나 매력적이고 재밌는 도시 방콕의 볼거리와 먹거리 가볼만한 곳을 소개할게요~
            <br>
            <h1>1. 왕궁(Grand Palace)</h1>  
            <br>
            태국 방콕에 왔으면 한 번 쯤은 꼭 들러봤음 하는 왕궁(Grand Palace)이에요!
            <br>
            오픈시간은  08:30~15:30 , 반바지나 민소매 차림은 출입불가하니
            <br>
            방문 시 옷차림에 신경써주세요.
            <br>
            라마 1세부터 역대 국왕들이 살았던 왕궁으로
            <br>
            특히 왕실 수호 사원 "왓프라깨우" 는 태국에서 가장 신성시하는 최고의 사원이라구 해요 :)
            <br>
            입장하자마자 단체관광객들로 엄청난 인파에 놀라기도하지만,
            <br>
            건축물 하나하나 엄청나게 화려한 사원이 눈을   수 없게 만드는 너무너무 멋진 곳이에요!
            <br>
            왓프라깨우 본당에는 세계적으로 유명한 에메랄드 불상이 있는데,
            <br>
            이 문에 에메랄드 사원이라고 부르기도 해요.
            <h1>카오산로드</h1>
            방콕하면 떠오르는 배낭여행객들이 너무나 사랑하는 카오산로드 !!!!
            왕궁에서 약 1km 떨어진 방람푸시장 근처에 위치해있구요.
            <br>
            노점상이 즐비하는 거리에서 방콕의 밤문화를 즐길 수 있는 곳으로
            <br>
            비교적 저렴한 가격의 마사지, 식당, 숙박시설이 많아요!
            <br>
            방콕여행 중 카오산로드를 들리셨다면
            <br>
            "사와디카" 인사를 하는 맥도날드에서 콘파이도 드셔보세요 :) 
            `,
                country: 6,
                user: 1,
            },
        ])
            .execute();
    }
}
exports.CreateInitialData = CreateInitialData;
//# sourceMappingURL=create-initial-data.js.map