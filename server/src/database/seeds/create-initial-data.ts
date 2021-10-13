import { Countries } from '../../entities/Countries';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Moments } from '../../entities/Moments';
import { Stories } from '../../entities/Stories';
import { Users } from '../../entities/Users';
import { Images } from '../../entities/Images';
import { Articles } from '../../entities/Articles';
import { Comments } from '../../entities/Comments';
import { SubComments } from '../../entities/SubComments';

export class CreateInitialData implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Countries)
      .values([
        {
          id: 1,
          code: 'KR',
          name: '대한민국',
          continent: '동북아시아',
          image_src:
            'https://images.unsplash.com/photo-1535188584454-744758d916e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
          flag_src:
            'https://w.namu.la/s/43a07e65f573eb41fffe67ac0d1008fa73b5c7a04a004ff9004ddf0680524c5c5bd8a30c724fd7966bd7d3a2f60d0bd17c3cc159dd41f704f9b6dc188a21346db82d0ab77673676c9ecdf2aedb3e49f7119beff54a709d8fffa6241fce4cd3a4',
        },
        {
          id: 2,
          code: 'JP',
          name: '일본',
          continent: '동북아시아',
          image_src:
            'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
          flag_src:
            'https://www.mofa.go.kr/upload/bbs/NN001/20171026052738683.gif',
        },
        {
          id: 3,
          code: 'CN',
          name: '중국',
          continent: '동북아시아',
          image_src:
            'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
          flag_src:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/225px-Flag_of_the_People%27s_Republic_of_China.svg.png',
        },
        {
          id: 4,
          code: 'TW',
          name: '대만',
          continent: '동북아시아',
          image_src:
            'https://images.unsplash.com/photo-1598935898639-81586f7d2129?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
          flag_src:
            'https://w.namu.la/s/183004771c3ffdb5d87f9d8bb979006122a3cc153296d4a32caa605333358df9f6633bddee6114e7c9fceaff414f13923837c5c9a1d61ed63f68a7a0557c4bf20dca6e8309d3f11f5a059798bf0dfa30939e030dd691d7f614c71b5c59606f70',
        },
        {
          id: 5,
          code: 'HK',
          name: '홍콩',
          continent: '동북아시아',
          image_src:
            'https://images.unsplash.com/photo-1594973782943-3314fe063f68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
          flag_src:
            'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/250/20201125_221628332.gif',
        },
        {
          id: 6,
          code: 'TH',
          name: '태국',
          continent: '동남아시아',
          image_src:
            'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1023&q=80',
          flag_src:
            'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/214/20201125_215627480.gif',
        },
        {
          id: 7,
          code: 'VN',
          name: '베트남',
          continent: '동남아시아',
          image_src:
            'https://images.unsplash.com/photo-1555921015-5532091f6026?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
          flag_src:
            'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/92/20201125_212908389.gif',
        },
        {
          id: 8,
          code: 'SG',
          name: '싱가포르',
          continent: '동남아시아',
          image_src:
            'https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
          flag_src:
            'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/133/20201125_213857371.gif',
        },
        {
          id: 9,
          code: 'MY',
          name: '말레이시아',
          continent: '동남아시아',
          image_src:
            'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
          flag_src:
            'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/66/20201125_212428115.gif',
        },
        {
          id: 10,
          code: 'ID',
          name: '인도네시아',
          continent: '동남아시아',
          image_src:
            'https://images.unsplash.com/photo-1577547476482-63dc54e36e26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
          flag_src:
            'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/175/20201125_215019677.gif',
        },
        {
          id: 11,
          code: 'KH',
          name: '캄보디아',
          continent: '동남아시아',
          image_src:
            'https://images.unsplash.com/photo-1594903717283-2b96af6d65f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
          flag_src:
            'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/194/20201125_215315869.gif',
        },
        {
          id: 12,
          code: 'PH',
          name: '필리핀',
          continent: '동남아시아',
          image_src:
            'https://images.unsplash.com/photo-1573191055128-94ca66d6efb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
          flag_src:
            'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/237/20201125_220304255.gif',
        },
        {
          id: 13,
          code: 'LA',
          name: '라오스',
          continent: '동남아시아',
          image_src:
            'https://images.unsplash.com/photo-1552058185-b7e8f6744229?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
          flag_src:
            'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/47/20201125_211834641.gif',
        },
        {
          id: 14,
          code: 'MM',
          name: '미얀마',
          continent: '동남아시아',
          image_src:
            'https://images.unsplash.com/photo-1490077476659-095159692ab5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
          flag_src:
            'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/82/20201125_212709045.gif',
        },
        {
          id: 15,
          code: 'IN',
          name: '인도',
          continent: '남아시아',
          image_src:
            'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
          flag_src:
            'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/174/20201125_215008384.gif',
        },
        {
          id: 16,
          code: 'LK',
          name: '스리랑카',
          continent: '남아시아',
          image_src:
            'https://images.unsplash.com/photo-1612862862126-865765df2ded?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
          flag_src:
            'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/125/20201125_213727531.gif',
        },
        {
          id: 17,
          code: 'NP',
          name: '네팔',
          continent: '남아시아',
          image_src:
            'https://images.unsplash.com/photo-1617469165786-8007eda3caa7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
          flag_src:
            'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/35/20201125_211632803.gif',
        },
      ])
      .execute();
    await connection
      .createQueryBuilder()
      .insert()
      .into(Users)
      .values([
        {
          id: 1,
          name: 'Fall IN Asia',
          icon: 'https://user-images.githubusercontent.com/74864925/129441338-e5013a60-20c8-4e19-8149-012bea46163f.png',
          introduce:
            '안녕하세요 Fall IN Asia 공식계정입니다. Fall IN Asia에서 관광,여행에 관한 많은 정보를 공유하고 얻어가요~🥰 (관광통역안내사 일본어와 영어🥇 , 그리고 국외여행인솔자 자격증 보유🥈 , 통역가이드 및 관광여행업 종사경험有🥉)',
        },
        {
          id: 2,
          name: 'Kim Sanghyun',
          admin: false,
          introduce: '안녕하세요 Kim Sanghyun입니다.',
          icon: 'https://yt3.ggpht.com/ytc/AKedOLS5TiRpoaiF3pvwvFKdCaKzRAh9k4MmvSScG2XC_g=s48-c-k-c0x00ffffff-no-rj',
          email: 'sanghyun0804@gmail.com',
        },
        {
          id: 3,
          name: '랑이',
          admin: false,
          introduce: '안녕하세요 랑이입니다.',
          email: 'rangloverrang98@gmail.com',
          icon: 'https://yt3.ggpht.com/ytc/AKedOLRU7ZduL0Y7Gcnh6qCqnwX4pTemMO17Tq0WPNXL-A=s48-c-k-c0x00ffffff-no-rj',
        },
        {
          id: 4,
          name: '지나가던나그네',
          admin: false,
          introduce: '안녕하세요 지나가던나그네입니다.',
          email: 'pillggxgo3525@naver.com',
          icon: 'https://yt3.ggpht.com/ytc/AKedOLS8MbEHxysu3gaYJjJJjF1SdEp11i-tlVCbKSw5=s48-c-k-c0x00ffffff-no-rj',
        },
        {
          id: 5,
          name: '가비',
          admin: false,
          introduce: '여행을 좋아하는 가비.',
          email: 'gabi030819@gmail.com',
          icon: 'https://yt3.ggpht.com/ytc/AKedOLQDnqDwksB8XFZRCyE9CfJE2LcSstZzgYSr57OaDg=s48-c-k-c0x00ffffff-no-rj',
        },
        {
          id: 6,
          name: '내이름은화성',
          admin: false,
          introduce: '안녕하세요 내이름은화성입니다.',
          email: '8pjparasjhambd@bartolemo.space',
          icon: 'https://yt3.ggpht.com/ytc/AKedOLRaj9fM79Cmawg5BHb_H9fJzJtb9qGi_kNpVztGiA=s48-c-k-c0x00ffffff-no-rj',
        },
        {
          id: 7,
          name: '방랑하는아제',
          admin: false,
          introduce: '안녕하세요 방랑하는아제입니다.',
          email: 'ukurdist5f@naver.com',
          icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3Owe2m5S_JZTxgW2ClloSDcvlFAxaEWV7A&usqp=CAU',
        },
        {
          id: 8,
          name: '석진윤',
          admin: false,
          introduce: '안녕하세요 석진윤입니다.',
          email: 'droman.hlinka.14w@googl.win',
          icon: 'https://yt3.ggpht.com/ytc/AKedOLT42ED1MYEN4Uvc2lhw-bvIYDozC5j0LeEmHw=s48-c-k-c0x00ffffff-no-rj',
        },
        {
          id: 9,
          name: '낭낭펀치',
          admin: false,
          introduce: '안녕하세요 낭낭펀치입니다.',
          email: 'aahmed_mahmed78@sanghoonghi.com',
          icon: 'https://yt3.ggpht.com/ytc/AKedOLR6OsK71gerI-ig7VxMJ_f9p5PhL4LJMXKBnDCmzlh8xA=s48-c-k-c0x00ffffff-no-rj',
        },
        {
          id: 10,
          name: 'Golden Night',
          admin: false,
          introduce: '안녕하세요 Golden Night입니다.',
          email: 'xanouar.abid.17n@rtfaz.site',
          icon: 'https://thumb.mtstarnews.com/06/2021/07/2021071408034353270_1.jpg/dims/optimize',
        },
        {
          id: 11,
          socialId: '',
          provider: 'google',
          name: 'Cho',
          admin: false,
          introduce: '안녕하세요 Cho입니다.',
          icon: 'https://lh3.googleusercontent.com/a-/AOh14GgVOQmvfj2Dh_FQKZvG5O55cTJAT9TX1DYwQsKT9Q=s96-c',
        },
        {
          id: 12,
          socialId: '1212',
          provider: 'google',
          name: 'rakkun Pom',
          admin: false,
          introduce: '안녕하세요 rakkun Pom입니다.',
          icon: 'https://lh3.googleusercontent.com/a-/AOh14GjNukkb_XlyNajLgPXvDf2yGipoUNkKWY0rVgfF=s96-c',
        },
        {
          id: 13,
          email: 'test@test',
          name: '테스트계정',
          admin: false,
          introduce: '안녕하세요 테스트계정입니다.',
          icon: 'https://user-images.githubusercontent.com/74864925/130333727-e625b505-a619-4e2d-844c-2bcd1cf9e47d.jpg',
        },
        {
          id: 14,
          socialId: '1414',
          provider: 'kakao',
          name: '성민',
          admin: false,
          introduce: '안녕하세요 성민입니다.',
          icon: 'http://k.kakaocdn.net/dn/P84MB/btrbIdOIkSj/mY8AXee8syiklckUUGXdJK/img_640x640.jpg',
        },
        {
          id: 15,
          socialId: '1515',
          provider: 'kakao',
          name: '짱필수',
          admin: false,
          introduce: '안녕하세요 짱필수입니다.',
        },
      ])
      .execute();
    await connection
      .createQueryBuilder()
      .insert()
      .into(Moments)
      .values([
        {
          id: 2,
          code: 'KR',
          hit: 34,
          content:
            '<p>여수에서 놀만한곳 여수 관광지 좋은곳 여수 돌산공원 근처 괜찮은곳 추천해주세요!</p> <br> 여수 여행 코스 제발좀 알려주세요 여행자님들.',
          country: <any>1,
          user: <any>2,
          type: '여행정보 공유',
          createdAt: '2021-08-22 15:51:03.869619',
          updatedAt: '2021-08-22 15:51:03.869619',
        },
        {
          id: 3,
          code: 'JP',
          hit: 45,
          content:
            '일본 여행갈때 기내에서 작성하는 표에서 일본에 체류할 기간을 ~정확히~ 표기하셔야합니다.<br>만약 나중에 워킹홀리데이비자를 할때 문제가될수있습니다 😥😥😥<br><br>반드시 숙지하세요!!',
          country: <any>2,
          user: <any>1,
          type: '여행정보 공유',
          createdAt: '2021-08-25 12:51:03.869619',
          updatedAt: '2021-08-25 12:51:03.869619',
        },
        {
          id: 4,
          code: 'KR',
          hit: 15,
          content:
            '<h2>누가 도움좀 주세요!</h2>친구들이랑 제주도놀러갈때 미리 정해둘려고<br>제주도숙박 알아보고 있는데 싼곳있으면 바로 픽할려구용!<br>호텔이나 펜션, 모텔 제주도숙박으로 괜찮은 곳이면 다 좋아요<br>숙소안이 깔끔하거나 접근성좋은 위치면 좋겠어요! <br>제주도숙박하기 좋은 곳 다양하게 알려주세요~<br>',
          country: <any>1,
          user: <any>3,
          type: '여행정보 공유',
          createdAt: '2021-08-26 12:51:03.869619',
          updatedAt: '2021-08-26 12:51:03.869619',
        },
        {
          id: 5,
          code: 'JP',
          hit: 26,
          content:
            '학교졸업전에 일본취업비자를 받으려고하는데요 비자변경 신청을 하는건가요? <br>취업비자 신청을 하면되는건가요?출입국관리소에 들어가서 봐도 비자에 대해 잘몰라서 어렵네요..',
          country: <any>2,
          user: <any>5,
          type: '한인 커뮤니티',
          createdAt: '2021-09-02 12:51:03.869619',
          updatedAt: '2021-09-02 12:51:03.869619',
        },
        {
          id: 6,
          code: 'TH',
          hit: 15,
          content:
            '<h2>태국 가서 할일</h2><p>1. gmm 빌딩 스타벅스에서 커피마시기</p><br/><p>2. gmm 올라가서 애들 굿즈사기</p><br/><p>3. 투게더 대학 탐방 하고 사진찍기</p><br/><p>4. 애들이 간 밥집 가서 밥먹기</p><br/><p>5. 드럭스 스토어가서 해들 화장품 사기</p><br/><p>6. 편의점 가서 오이시 마마 먹기</p><br/><p>7. 애들 행사에 놀러가기</p><br/><p>8. 애들 사진찍기</p><br/><p>9. 애들한테 말걸기</p>',
          country: <any>6,
          user: <any>4,
          type: '여행정보 공유',
          createdAt: '2021-09-04 11:35:03.869619',
          updatedAt: '2021-09-04 11:35:03.869619',
        },
        {
          id: 7,
          hit: 32,
          code: 'TH',
          content:
            '태국여행 관련 사기,보이스피싱이 급증하고 있습니다. 항상 여행시에는 안전이 우선입니다. http://ozzye.blog.me/30188224296',
          country: <any>6,
          user: <any>1,
          type: '사기 경보',
          createdAt: '2021-09-10 11:35:03.869619',
          updatedAt: '2021-09-10 11:35:03.869619',
        },
        {
          id: 8,
          code: 'VN',
          hit: 15,
          type: '여행정보 공유',
          content:
            '<p><strong>혹시 베트남 다낭 추천하시나요? 코로나 끝나면 가보고싶은데 정보가 없네요</strong></p><p><br></p><p>다낭 vs 하노이 vs 호치민 셋중에 고민중이에요..</p><p><br></p><p>그리고 쌀국수 맛집도 있으면 알려주세요!!!!</p>',
          country: <any>7,
          user: <any>9,
          createdAt: '2021-09-12 11:35:03.869619',
          updatedAt: '2021-09-12 11:35:03.869619',
        },
        {
          id: 9,
          code: 'JP',
          hit: 13,
          type: '한인 커뮤니티',
          content:
            '<p>도쿄 맛집 알려주세요!!!!!</p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>',
          country: <any>2,
          user: <any>8,
          createdAt: '2021-09-17 11:35:03.869619',
          updatedAt: '2021-09-17 11:35:03.869619',
        },
        {
          id: 10,
          code: 'TH',
          hit: 55,
          type: '여행정보 공유',
          content:
            '<p>태국 푸켓 백신접종 증명서랑 음성반응(?) 확인서 있으면 여행가도 괜찮다는데 사실인가요???????</p>',
          country: <any>6,
          user: <any>10,
          createdAt: '2021-09-20 11:35:03.869619',
          updatedAt: '2021-09-20 11:35:03.869619',
        },
        {
          id: 11,
          code: 'KR',
          hit: 14,
          type: '여행정보 공유',
          content:
            '<p>제주도 여행가면 인식 좋을까요? </p><p><br></p><p>제주도민이 별로 안반긴다는 느낌이 없지않아 있어서 ^^;;</p><p><br></p><p>간다면 바이크타고 천천히 산책하고싶네요~~~</p>',
          country: <any>1,
          user: <any>6,
          createdAt: '2021-09-20 11:35:03.869619',
          updatedAt: '2021-09-20 11:35:03.869619',
        },
        {
          id: 12,
          code: 'VN',
          hit: 21,
          type: '한인 커뮤니티',
          content:
            '<p>하노이 에그커피 드셔보셨나유? <a href="https://www.travelrain.com/1171" rel="noopener noreferrer" target="_blank" style="background-color: rgb(255, 255, 255); color: rgb(26, 13, 171);">cafe dinh</a>  여기가 보석같은 숨은 맛집입니다! 지금은 코로나로 휴업중이지만요 ㅠㅠㅠ</p>',
          country: <any>7,
          user: <any>7,
          createdAt: '2021-09-24 11:35:03.869619',
          updatedAt: '2021-09-24 11:35:03.869619',
        },
        {
          id: 13,
          code: 'JP',
          hit: 9,
          type: '한인 커뮤니티',
          content:
            '<p>일본 입국금지 언제 풀려 ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ</p>',
          country: <any>2,
          user: <any>8,
          createdAt: '2021-09-28 11:35:03.869619',
          updatedAt: '2021-09-28 11:35:03.869619',
        },
        {
          id: 14,
          code: 'JP',
          hit: 44,
          type: '한인 커뮤니티',
          content:
            '<p>일본 입국금지 현황을 관광소식 페이지에 업로드 했습니다.</p><p><br></p><p>일본 입국에 관련 궁금한게 있으신분들은 관광소식에 일본 입국금지 현황을 참고해주시고</p><p><br></p><p><strong>대한민국 외교부와 일본 외무성 공지가 가장 정확하니 지속적으로 모니터링 해주세요.</strong></p><p><br></p><p>https://fallinasia.com/news/2</p>',
          country: <any>2,
          user: <any>1,
          createdAt: '2021-10-03 11:35:03.869619',
          updatedAt: '2021-10-03 11:35:03.869619',
        },
        {
          id: 15,
          code: 'KR',
          hit: 12,
          type: '한인 커뮤니티',
          content:
            '<p>여수 횟집 추천할만한곳 있나요? 묘도대교 근처가 좋습니다 ㅎㅎ</p>',
          country: <any>1,
          user: <any>2,
          createdAt: '2021-10-07 11:35:03.869619',
          updatedAt: '2021-10-07 11:35:03.869619',
        },
        {
          id: 18,
          code: 'VN',
          hit: 9,
          type: '한인 커뮤니티',
          content:
            '<p>베트남 요즘 코로나 어떤가요?</p><p><br></p><p>비지니스때문에 출장가야되는데 많이 걱정되네요...😭</p><p><br></p><p>또 삼성 등 한국기업이 잇다라 베트남에서 철수준비중이거나 진행중인데</p><p><br></p><p>그거때문에 언론에서 베트남 여론을 많이 흔들고있나봐요</p><p><br></p><p>관계가 조금 안좋아진거 같아서 걱정되네요🥺</p><p><br></p>',
          country: <any>7,
          user: <any>11,
          createdAt: '2021-10-11 11:35:03.869619',
          updatedAt: '2021-10-11 11:35:03.869619',
        },
      ])
      .execute();
    await connection
      .createQueryBuilder()
      .insert()
      .into(Stories)
      .values([
        {
          id: 1,
          code: 'TH',
          region: 'Bangkok, Bangkok, Thailand',
          lat: 13.75,
          lng: 100.517,
          thumbnail:
            'https://fall-in-asia.s3.ap-northeast-2.amazonaws.com/thumb/1629250308732_Bangkok-food-boat-noodles.jpg',
          title: '방콕여행 명소 맛집 베스트7 : 태국 방콕여행 일정',
          hit: 96,
          content: `<h1><strong>방콕의 길거리 음식</strong></h1><p><br></p><p><a href="https://www.agoda.com/ko-kr/city/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>방콕</strong></a>에는 태국 
          최고의 맛과 향이 가득한 유명한 맛집 골목이 많다. </p><p><br></p><p>인파로 북적이는 이 도시의 어디를 가도 리어카, 트럭, 가판대에서 파는 맛있는 팟타이꿍(새우 팟타이), 쏨땀, 스프링롤, 카오팟(볶음밥)이 넘쳐난다.&nbsp;<a href="https://www.agoda.com/ko-kr/city/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>방콕</strong></a>은 먹으러만 와도 좋은 곳이라는 말이 있을 정도다.</p><p><br></p><p><br></p><p><br></p><h1><strong>길거리 음식 
          을 맛볼 수 있는 최고의 장소</strong></h1><p><br></p><p><a href="https://www.agoda.com/ko-kr/city/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>방콕</strong></a>은 맛집을 찾는 인파로 항상 북적인다.&nbsp;<a href="https://www.agoda.com/ko-kr/city/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>방콕</strong></a>에서는 전통의 맛집은 물론 새롭고 색다른 요리도 맛볼 수 
          있다. </p><p><br></p><p>어디를 가도 맛집이 넘쳐나지만, 특히 기차역 주변이나 대학가에 유명한 곳이 많다. </p><p><br></p><p>그러나 여행자에게 추천하는 장소는 차이나타 
          운, 랏차왓 시장(Ratchawat Market), 방락(Bangrak), 낭렁 시장(Nang Loeng Market), 전승 기념탑(Victory Monument) 주변 지역이다.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;</p><p><strong>라차왓(Ratchawat) 시장 &amp; 스리얀(Sriyan) 시장</strong></p><p><br></p><p><strong>라차왓 시장</strong>과&nbsp;<strong>스리얀 시장</strong>의 진면목은 밤이 되
          어야 볼 수 있다. </p><p><br></p><p>이 두 시장은 방콕에서 가장 오래된 시장으로 현지인들이 많이 찾는 곳이다.&nbsp;<strong>라차왓 시장</strong>에서 맛있는 길거리 음식 
          을 맛볼 수 있는 최고의 시간대는 밤이다.&nbsp;<strong>라차왓 시장</strong>에서 유명한 요리는 풍미 가득한 고베산 소고기 국수와 오리고기 구이 요리다.</p><p><br></p><p> 라차왓 시장에서 잠깐만 걸으면 있는&nbsp;<strong>스리얀 시장</strong>은 국수와 커리가 유명하다. 작은 가판대에서 파는 커리 어묵 볶음은 눈이 휘둥그레질 정도로 맛있다.</p><p><br></p><p><br></p><p><br></p><p class="ql-align-center"><strong><img src="https://i0.wp.com/www.agoda.com/wp-content/uploads/2019/11/Bangkok-food-dumplings.jpg?ssl=1" height="360" width="540"></strong></p><p class="ql-align-center"><strong><img src="https://i0.wp.com/www.agoda.com/wp-content/uploads/2019/11/Bangkok-food-Yentafo-pink-noodle-soup.jpg?ssl=1" height="360" width="540"></strong></p><p class="ql-align-center"><br></p><p>&nbsp;&nbsp;&nbsp;&nbsp;</p><p><br></p><p><br></p><p><strong>방락 (Bangrak)</strong></p><p><br></p><p><a href="https://www.agoda.com/ko-kr/hotels-near-bangrak-district-office/attractions/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>방락 구역</strong></a>을 거닐다 보면 찐만두와 튀긴 마늘의 냄새가 코를 자극한다. 
          </p><p><br></p><p>끝없이 이어지는 음식 가판대 중 어디를 가도 채식 요리와 디저트를 포함한 맛있는 요리가 가득하다.&nbsp;<a href="https://www.agoda.com/ko-kr/hotels-near-bangrak-district-office/attractions/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>방락 구역</strong></a>은 맛있고 신선한 길거리 음식은 물론 생선과 해산물 요리를 맛보기에 최적의 장소이기도 하다. </p><p><br></p><p>스카이트레인을 타고 BTS 살라댕(Sala Daeng)역에서
           내린 다음 실롬로(Silom Road)를 따라 걷다 보면 군침 도는 냄새와 함께 온갖 요리가 펼쳐지는 이 거리를 찾을 수 있다.</p><p><br></p><p><br></p><p><br></p><p class="ql-align-center"><strong><img src="https://i1.wp.com/www.agoda.com/wp-content/uploads/2019/11/Bangkok-food-Kra-prow-moo-with-rice.jpg?ssl=1" height="235" width="353"></strong></p><p class="ql-align-center"><strong><img src="https://i1.wp.com/www.agoda.com/wp-content/uploads/2019/11/Bangkok-food-Tom-Kha-Kai.jpg?ssl=1" height="235" 
          width="353"></strong></p><p class="ql-align-center"><strong><img src="https://i2.wp.com/www.agoda.com/wp-content/uploads/2019/11/Bangkok-food-Som-Tam-Thai.jpg?ssl=1" height="235" width="353"></strong></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><p>&nbsp;&nbsp;&nbsp;&nbsp;</p><p><strong>낭렁 시장 (Nang Loeng Market)</strong></p><p><br></p><p>오랜 역사와 전통을 자랑하는 동네 시장인&nbsp;<a href="https://www.agoda.com/ko-kr/hotels-near-nang-loeng-market/attractions/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>낭렁 시장</strong></a>에는 오래된 목조 건물과 수년간 이곳에서 음식 장사를 해온 노포들이 남아있다. </p><p><br></p><p>시장의 내부와 외부를 채운 음식 가판대는 점심시간에 특히 붐빈다
          . </p><p><br></p><p>시장 중심에는 점심 시간대에 운영하는 푸드코트가 있어서 이 시간대에는 회사원들이 자리를 가득 채울 때가 많다. 쌀과 커리로 만든 각종 요리, 달콤한  
          디저트를 맛볼 것을 추천한다.</p><p><br></p><p><br></p><p class="ql-align-center"><strong><img src="https://i2.wp.com/www.agoda.com/wp-content/uploads/2019/11/Bangkok-food-boat-noodles.jpg?ssl=1" height="360" width="540"></strong></p><p class="ql-align-center"><strong><img src="https://i1.wp.com/www.agoda.com/wp-content/uploads/2019/11/Bangkok-food-Thai-fried-rice.jpg?ssl=1" height="360" width="540"></strong></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><p>&nbsp;&nbsp;&nbsp;&nbsp;</p><p><strong>빅토리 모뉴먼트 (Victory Monument, 전승 기념탑)</strong></p><p><br></p><p><a href="https://www.agoda.com/ko-kr/hotels-near-victory-monument/attractions/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" 
          style="color: rgb(240, 87, 0);"><strong>빅토리 모뉴먼트</strong></a>&nbsp;주변 지역은 길거리 음식 노점으로 가득하다.&nbsp;<a href="https://www.agoda.com/ko-kr/city/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>방콕</strong></a>의 교통 요충지 중 한 곳인&nbsp;<a href="https://www.agoda.com/ko-kr/hotels-near-victory-monument/attractions/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>빅토리 모뉴먼트</strong></a>&nbsp;주변은 매일 많은 사람들이 지나치는 곳이다. </p><p><br></p><p>이 곳의 음식 노점에서는 원래 보트 위에서 팔던 것 
          이라 “보트 누들”이라고 부르는 쌀국수를 비롯해 다양한 태국식 길거리 음식을 판다.&nbsp;<a href="https://www.agoda.com/ko-kr/hotels-near-victory-monument/attractions/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>빅토리 모뉴먼트</strong></a>&nbsp;주변 골목에는 맛집으
          로 유명한 레스토랑도 많다.</p><p><br></p><h4><a href="https://www.agoda.com/ko-kr/yello-rooms-victory-monument/hotel/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>옐로 룸 빅토리 모뉴먼트(YELLO Rooms Victory Monument)</strong></a><strong>에 머무르며&nbsp;</strong><a href="https://www.agoda.com/ko-kr/hotels-near-victory-monument/attractions/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>빅토리 모뉴먼트</strong></a><strong>&nbsp;인근의 맛집을 방문해보자</strong></h4><p><br></p><p><br></p><p><br></p><p><a href="https://www.agoda.com/ko-kr/yello-rooms-victory-monument/hotel/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong><img src="https://i1.wp.com/www.agoda.com/wp-content/uploads/2019/11/Bangkok-food-YELLO-Rooms-Victory-Monument.jpg?ssl=1" alt="태국 여행-방콕 여행-방콕 추천 호텔-방콕  
          추천 숙소-옐로 룸 빅토리 모뉴먼트-YELLO Rooms Victory Monument" height="600" width="900"></strong></a></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><h2><strong>꼭 먹어봐야 할 태국 요리</strong></h2><p><br></p><p><br></p><p>맛있는 음식이 넘쳐나는&nbsp;<a href="https://www.agoda.com/ko-kr/city/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>방콕</strong></a>에서 몇 가지 음식만 선택하는 것은 정말 어려운 일이다. </p><p><br></p><p>특히 며칠밖에 시간이 없는 여행자들은 괴로운 선택의 기로에 서게 된다. 로티, 크레페, 쌀국수, 해산물, 돼지고기 튀김 등&nbsp;<a href="https://www.agoda.com/ko-kr/city/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>방콕</strong></a>에서 꼭 먹어봐야 할 맛 
          있는 음식을 소개한다.</p><p><br></p><p><br></p><p><strong>바나나 로티</strong></p><p><br></p><p>디저트를 먹고 싶다면 로티에 바나나와 연유를 넣은 “로티 끌루어이”(바 
          나나 로티)를 꼭 먹어보자. 태국 요리는 단맛을 아끼지 않는다.</p><p><br></p><p> 따라서 이 얇은 팬케이크에도 연유, 누텔라, 코코넛, 또는 달걀프라이 등의 토핑이 올라가는
           경우가 많다. </p><p><br></p><p>하나만 먹으려다가 여러 개를 먹게 될 수도 있다. 바나나와 연유를 넣은 튀긴 로티는 태국 길거리 음식 입문자에게 달콤한 첫인상을 남길 것 
          이다.</p><p><br></p><p><br></p><p><strong>크레페</strong></p><p><br></p><p>달콤함이 가득한 얇은 크레페는 시장이나 전철역에 있는 음식 가판대에서 찾을 수 있다. 들고  
          다니면서 먹기 편하게 종이에 싸서 줄 때가 많아서 빠르고 간편하게 달콤한 디저트를 즐길 수 있다. 특히&nbsp;<a href="https://www.agoda.com/ko-kr/hotels-near-sukhumvit-mrt-station/attractions/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>MRT 수쿰빗(Sukhumvit)역</strong></a>&nbsp;주변에서 파는 크레페가 유명하다.</p><p><br></p><p><br></p><p><strong>팟타이</strong></p><p><br></p><p>태국에서 가장 유명한 국수 요리인 팟타이는&nbsp;<a 
          href="https://www.agoda.com/ko-kr/city/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>방콕</strong></a>&nbsp;어디에서든 밤낮으로 찾아볼 수 있다. 쌀국수를 기본으로 새우, 달걀, 땅콩, 두부 등의 토핑이 더해지는 팟타이는 달콤하고 짭짤하며 라임을 짜 넣어 톡 쏘는 듯한 맛
          이 일품이다. 태국에 있는 동안 이 나라의 대표 요리인 팟타이를 꼭 맛보도록 하자.</p><p><br></p><p><br></p><p><br></p><p class="ql-align-center"><strong><img src="https://i1.wp.com/www.agoda.com/wp-content/uploads/2019/11/Bangkok-food-roti-with-banana.jpg?ssl=1" height="235" width="353"></strong></p><p class="ql-align-center"><strong><img src="https://i0.wp.com/www.agoda.com/wp-content/uploads/2019/11/Bangkok-food-Shrimp-Padthai.jpg?ssl=1" height="235" width="353"></strong></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><p>&nbsp;&nbsp;&nbsp;&nbsp;</p><p><strong>스프링롤</strong></p><p><br></p><p>스프링롤 역시 팟타이만큼이나&nbsp;<a href="https://www.agoda.com/ko-kr/city/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>방콕</strong></a>&nbsp;어디를 가도 찾아볼 수 있는 요리다. 저렴한 요리인 스프링롤은 어느 식당, 푸드트럭, 가판대를 가도 맛볼 수 있다. </p><p><br></p><p>태국식 스프링롤에는 전통적으로 당면, 다진 돼지고기와 야채가 들어가지만, 채식 스프링롤도 쉽게 찾아볼 수 있다. 겉은 바삭하고 속은 뜨끈해서 맛보지 않고는
           못 배길 것이다.&nbsp;<a href="https://www.agoda.com/ko-kr/city/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>방콕</strong></a>에 왔다면 스프링롤은 꼭 먹어봐야 한다.</p><p><br></p><p><br></p><p><strong>무크랍 (Moo Krob)</strong></p><p><br></p><p>돼지고기 튀김인 
          무크랍도 빼놓을 수 없는 별미다.&nbsp;<a href="https://www.agoda.com/ko-kr/city/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: 
          rgb(240, 87, 0);"><strong>방콕</strong></a>에서 가장 인기 있는 요리 중 하나인 무크랍은 삼겹살을 바싹하게 튀긴 요리로 방콕 어디에서든 찾아볼 수 있다. 쌀밥에 해선장을
           곁들여 나올 때가 많은데 바삭하고 촉촉한 맛의 조화가 일품이다. 한 번 맛보면 왜 이 요리를 현지인들과 관광객들이 모두 좋아하는지 알게 될 것이다.</p><p><br></p><p><br></p><p><strong>방콕의 해산물 요리</strong></p><p><br></p><p><a href="https://www.agoda.com/ko-kr/city/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>방콕</strong></a>에는 놀랄 정도로 다양한 해산물 요리가 있다. 레스토랑이나 음식 노점에서 매콤새콤한 왕새우탕인 똠얌 
          꿍, 튀긴 새우 패티인 텃만꿍, 강황으로 양념한 튀긴 생선, 소금에 절인 생선을 그릴에서 바로 구워주는 요리 등을 맛볼 수 있다. 레스토랑에서 무슨 요리를 파는지 확인하려면
           정문 옆에 있는 메뉴를 보면 된다. 여러 레스토랑에서 손님들의 메뉴 선택에 도움을 주기 위해 요리 사진이 들어간 메뉴판을 제공한다.</p><p><br></p><p><br></p><p><br></p><p class="ql-align-center"><strong><img src="https://i1.wp.com/www.agoda.com/wp-content/uploads/2019/11/Bangkok-food-spring-rolls.jpg?ssl=1" height="235" width="353"></strong></p><p class="ql-align-center"><strong><img src="https://i1.wp.com/www.agoda.com/wp-content/uploads/2019/11/Bangkok-food-Crispy-pork-with-rice.jpg?ssl=1" height="235" width="353"></strong></p><p class="ql-align-center"><strong><img src="https://i2.wp.com/www.agoda.com/wp-content/uploads/2019/11/Bangkok-food-seafood.jpg?ssl=1" height="235" width="353"></strong></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><p>&nbsp;&nbsp;&nbsp;&nbsp;</p><h4><a href="https://www.agoda.com/ko-kr/anantara-sathorn-bangkok-hotel/hotel/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>아난타라 사톤 방콕 호텔(Anantara Sathorn Bangkok)</strong></a><strong>에 머무르며&nbsp;</strong><a href="https://www.agoda.com/ko-kr/hotels-near-bangrak-district-office/attractions/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>방락 시장</strong></a><strong>을 방문해보자</strong></h4><p><br></p><p><br></p><p><a href="https://www.agoda.com/ko-kr/anantara-sathorn-bangkok-hotel/hotel/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong><img src="https://i1.wp.com/www.agoda.com/wp-content/uploads/2019/11/Bangkok-food-Anantara-Sathorn-Bangkok.jpg?ssl=1" alt="태국 여행-방콕 여행-방콕 추천 호텔-방콕 추천 숙소-아난타라 사톤 방콕 호텔-Anantara Sathorn Bangkok" height="600" width="900"></strong></a></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><h2><strong>방콕에서 꼭 가봐야 할 레스토랑</strong></h2><p><br></p><p><br></p><p><a href="https://www.agoda.com/ko-kr/city/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>방콕</strong></a>의 태국 요리는 전설적인 명성을 자랑한다. 매일 새로운 맛집을 찾을 수 있고, 맘에 들었던 곳을 몇 번이나 가게 되기도 한다. 패스트푸드 식당에
          서 고급스러운 파인 다이닝까지 다양한 선택지를 갖춘&nbsp;<a href="https://www.agoda.com/ko-kr/city/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>방콕</strong></a>은 현지인들도 인정하는 태국 최고의 맛집 도시다. 아래에 추천하는 식당에서 최고의 식도락 경험을 해보도록
           하자.</p><p><br></p><p><br></p><p><strong>방콕 씨뷰</strong>&nbsp;(Bangkok Seaview)</p><p><br></p><p><a href="https://www.agoda.com/ko-kr/city/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>방콕</strong></a>의 최고의 해산물 맛을 보고 싶다면 “<a href="https://www.agoda.com/ko-kr/hotels-near-bangkok-sea-view-point/attractions/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>방콕 씨뷰</strong></a>”를 잊지 말자. 수상 해산물 식당인 이곳에 가려면 부두에서 정시 출발하는 보트를 타야 한다. 보트를 타고 가다 보면 그날 요리할 재료를 열
          심히 낚고 있는 어부들을 볼 수 있다. 어부들이 잡은 신선한 생선과 해산물을 이곳에서 바로 맛볼 수 있다.</p><p><br></p><p><br></p><p><strong>남</strong>&nbsp;(Nahm)</p><p><br></p><p>우아한 파인다이닝 체험을 하고 싶다면&nbsp;<a href="https://www.agoda.com/ko-kr/como-metropolitan-bangkok/hotel/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>코모 메트로폴리탄 방콕</strong></a>(COMO Metropolitan Bangkok)에 있는 “<a href="https://www.agoda.com/ko-kr/hotels-near-nahm-restaurant/attractions/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>남</strong></a>”을 추천한다. 세련된 인테리어와 고급스러운 메뉴를 갖춘 이 곳에는 여러 명이 같이 먹을 수 있게 고안한 독특한 에피타이저와 메인 요리가 있어서 단체로 
          방문하기에 좋다. 스파이시 수프나 비둘기 랍(larb, 간 고기를 매콤하게 양념한 태국식 요리) 샐러드를 추천한다.</p><p><br></p><p><br></p><p><strong>이사야 시아미즈 클럽</strong>&nbsp;(Issaya Siamese Club)</p><p><br></p><p><a href="https://www.agoda.com/ko-kr/hotels-near-issaya-siamese-club/attractions/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>이사야 시아미즈 클럽</strong></a>은 가격이 비싸지 않은 캐주얼 다이닝 중 최고의 레스
          토랑이다. 밝고 컬러풀한 인테리어에 빈백 의자가 놓여 있어서 톡톡 튀면서도 편안한 분위기에서 식사를 즐길 수 있다.&nbsp;<a href="https://www.agoda.com/ko-kr/hotels-near-issaya-siamese-club/attractions/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>이사야 시아미즈 클 
          럽</strong></a>에서 대표 칵테일과 독창적이고 예술적인 요리를 음미하다 보면 방콕의 번잡스러움과 소음이 잠시 사라지는 듯한 느낌마저 받을 수 있다.</p><p><br></p><p><br></p><p><br></p><p><strong>프라짝 뻇 양</strong>&nbsp;(Prachak Pet Yang)</p><p><br></p><p>신선한 오리가 줄줄이 창문에 걸려있는 모습으로 유명한&nbsp;<a href="https://www.agoda.com/ko-kr/hotels-near-prachak-roasted-duck-restaurant/attractions/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>프라짝 뺏 양</strong></a>은 “프라짝 로스티드 덕(Prachak Roasted Duck)”이라고도 불린다. 이곳에서는&nbsp;<a href="https://www.agoda.com/ko-kr/city/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>방콕</strong></a>&nbsp;최고의 광동식 오리구이를 
          판다. 이곳에는 국수가 곁들여진 요리가 많다. 높은 명성을 자랑하는 오리구이는 속이 향신채와 향신료로 차 있고 달콤한 소스가 같이 나와서 짭조름한 고기 맛과 환상의 단짠 
          조합을 이룬다.&nbsp;<a href="https://www.agoda.com/ko-kr/hotels-near-bangrak-district-office/attractions/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>방락 지구</strong></a>에 있는&nbsp;<a href="https://www.agoda.com/ko-kr/hotels-near-prachak-roasted-duck-restaurant/attractions/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>프라짝 뺏 양</strong></a>은 친한 친구
          와 둘이 가기에 최적인 레스토랑이다.</p><p><br></p><h4><a href="https://www.agoda.com/ko-kr/bandara-suites-silom/hotel/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>반다라 스위트 실롬(Bandara Suites Silom)</strong></a><strong>에 머무르며&nbsp;</strong><a href="https://www.agoda.com/ko-kr/hotels-near-nahm-restaurant/attractions/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>남 레스토랑</strong></a><strong>을 방문해 태국 음식을 즐겨보자</strong></h4><p><br></p><p><br></p><p><br></p><p><a href="https://www.agoda.com/ko-kr/bandara-suites-silom/hotel/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong><img src="https://i2.wp.com/www.agoda.com/wp-content/uploads/2019/11/Bangkok-food-Bandara-Suites-Silom.jpg?ssl=1" alt="태국 여행-방콕 여행-방콕 추천 호텔-방콕 추천 숙소-반다라 스위트 실롬_Bandara Suites Silom" height="600" width="900"></strong></a></p><p><br></p><p><br></p><p><br></p><p><br></p><h2><strong>그 외 도전해 볼 요리</strong></h2><p><br></p><p> 
          새로운 장소를 여행할 때 할 수 있는 최고의 경험 중 하나는 역시 그곳에서만 먹어볼 수 있는 요리에 도전해보는 것이다.&nbsp;<a href="https://www.agoda.com/ko-kr/city/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>방콕</strong></a>은 색다른 요리가 가득한 곳인 데다가 방 
          콕에 왔다면 꼭 먹어봐야 할 요리들도 적지 않다.</p><p><br></p><p><br></p><p><strong>곤충튀김</strong></p><p><br></p><p>곤충튀김을 먹어보는 것은 모든 사람의 버킷리스 
          트는 아닐 수 있다. </p><p><br></p><p>하지만&nbsp;<a href="https://www.agoda.com/ko-kr/city/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>방콕</strong></a>의 곤충튀김은 맛도 있고 어디서든 쉽게 접할 수 있다. 이동식 길거리 노점에서 주로 파는 곤충튀김의 종류는 다양하
          다. 각 노점 주인만의 비법 양념이 추가되고 노점마다 약간 다른 방식으로 요리된 메뚜기, 번데기, 개미, 귀뚜라미 등을 맛볼 수 있다. </p><p><br></p><p>곤충튀김을 파는 리 
          어카 노점은 주로 저녁에 거리 이곳저곳을 이동한다. </p><p><br></p><p>귀뚜라미의 형태를 온전히 간직한 귀뚜라미 튀김은 야식의 일종이다. 번데기는 말랑말랑한 식감인 반면
           귀뚜라미와 메뚜기는 바삭한 식감이다. 어느 노점에서 쉽게 찾아볼 수 있는 곤충튀김 종류는 대나무 갯지렁이, 귀뚜라미, 메뚜기다.</p><p><br></p><p><a href="https://www.agoda.com/ko-kr/hotels-near-khao-san-road/attractions/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>카오산 거리</strong></a>(Khao San Road),&nbsp;<a href="https://www.agoda.com/ko-kr/hotels-near-pratunum-market/attractions/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>빠뚜남 시장</strong></a>(Pratunum Market),&nbsp;<a href="https://www.agoda.com/ko-kr/hostels/hotels-near-soi-cowboy/attractions/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>쏘이 카우보이</strong></a>(Soi Cowboy),&nbsp;<a href="https://www.agoda.com/ko-kr/hotels-near-phahurat/attractions/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>파후랏</strong></a>(Phahurat) 등 사람이 많은 지역에 가면 곤충튀김을 파는 리어카 노점을 쉽게 찾아볼 수 있다.</p><p><br></p><p> 곤충튀김은 야식으로 인기가 높아서 바 바깥이나 밤문화가 활발하고 금기에 대한 경계가 낮은 지역에서도 곤충튀김을 많이 찾아볼 수 있다. 일부 노점상인들은 음식 사진 
          을 찍으면 돈을 요구하므로 사진을 찍기 전에 꼭 확인하도록 하자.</p><p><br></p><p><br></p><p><br></p><p class="ql-align-center"><strong><img src="https://i0.wp.com/www.agoda.com/wp-content/uploads/2019/11/Bangkok-food-Fried-insects.jpg?ssl=1" height="360" width="540"></strong></p><p class="ql-align-center"><strong><img src="https://i2.wp.com/www.agoda.com/wp-content/uploads/2019/11/Bangkok-food-Bird%E2%80%99s-nest-soup.jpg?ssl=1" height="360" width="540"></strong></p><p class="ql-align-center"><br></p><p class="ql-align-center"><strong><span class="ql-cursor"></span></strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;</p><p><strong>새둥지 수프</strong></p
          ><p><br></p><p>새둥지 수프는 건강과 복을 동시에 가져다주는 요리다. 칼새의 둥지로 만든 이 요리는 뜨겁게도, 차갑게도 먹을 수 있다.&nbsp;</p><p><br></p><p><a href="https://www.agoda.com/ko-kr/city/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>방콕</strong></a>&nbsp;전역에서 찾아볼 수 있지만 가장 맛있는 새둥지 수프는&nbsp;<a href="https://www.agoda.com/ko-kr/hotels-near-yaowarat-road/attractions/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>야오와랏</strong></a>(차이나타운)에서 맛볼 수 있다. </p><p><br></p><p>칼새는 타액을  
          실처럼 뽑아내 둥지를 만드는데 이 둥지는 어린 새들이 둥지를 떠난 후에 수확한다. 건강에 좋고 장수의 상징인 요리라 가격이 싸지는 않지만,&nbsp;<a href="https://www.agoda.com/ko-kr/city/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>방콕</strong></a>은 이 쫀득하고 달콤
          한 요리를 맛볼 수 있는 최고의 도시다.</p><p><br></p><p><br></p><p><strong>샥스핀</strong></p><p><br></p><p>샥스핀(상어 지느러미 수프)에는 다양한 건강상의 효능이 있 
          다고 한다. 이 수프는 비싼 가격만큼이나 화려한 모습으로 상에 오른다. 최고의 샥스핀을 맛볼 수 있는 곳은&nbsp;<a href="https://www.agoda.com/ko-kr/hotels-near-yaowarat-road/attractions/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>차이나타운</strong></a>이다.</p><p><br></p><h4><a href="https://www.agoda.com/ko-kr/grand-china-hotel/hotel/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>그랜드 차이나 호텔(Grand China Hotel)</strong></a><strong>에 머무르며&nbsp;</strong><a href="https://www.agoda.com/ko-kr/hotels-near-yaowarat-road/attractions/bangkok-th.html?cid=1844104" rel="noopener noreferrer" target="_blank" style="color: rgb(240, 87, 0);"><strong>야오와랏</strong></a><strong>&nbsp;거 
          리의 맛있는 음식을 즐겨보자</strong></h4><p><br></p><p><br></p><p>
                      </p>
            `,
          createdAt: '2021-08-22 12:51:03.906384',
          updatedAt: '2021-08-22 12:51:03.906384',
          country: <any>6,
          user: <any>1,
        },
        {
          id: 5,
          code: 'JP',
          region: 'Kyoto, Kyōto, Japan',
          lat: 35.0117,
          lng: 135.768,
          thumbnail:
            'https://fall-in-asia.s3.ap-northeast-2.amazonaws.com/thumb/1629252501143_kyoto.jpg',
          title:
            '바쁜 직장인들을 위한 일본 교토여행코스 1일차 부터 4일차까지 꽉꽉 채워서 놀자',
          hit: 142,
          content: `<h1>옛의멋과 현대의아름다 
          움이 공존하는 교토</h1><p><br></p><p><br></p><p>일본의 수많은 도시들 중에서 가장 여행 매력도가 높은 도시는 단연 교토라고 할 수 있을 것입니다. 도쿠가
          와 이에야스가 수도를 도쿄(에도)로 이전하기 전까지 약 천년간 일본의 수도였던 교토는 가장 일본다운 전통과 문화를 고스란히 간직하고 있기에 일본여행에서
           언젠가 꼭 한번 진득히 시간을 내어 가봐야 할 도시지요.</p><p><br></p><p>일본을 역사적으로 절대 좋아할 수 없는 우리 한국 사람들이지만, 그렇게 고유의 
          모습을 간직한 교토의 모습이 매혹적이라는 것은 부정할 수 없는 사실입니다. 그리고 옛것은 다 없애고 개발에만 열을 올리고 있는 우리나라의 현 모습에 비춰
           볼 때 과거와 현재와 미래가 공존하는 교토의 모습이 부럽기도 하지요.</p><p><br></p><p>개인적으로 교토를 10번 이상... 참 많이도 다녀왔지요.&nbsp;현재 
          사진 위주로 교토의 주요 명소를 소개하는 가이드북을 준비중이기도 한데 오늘은 자료도 정리할 겸 평소 벼르고 벼려 왔던 교토에 대한 추천여행코스를 소개해
          보려 합니다.</p><p><br></p><p>시간을 많이 내기 힘든 직장인들을 위한 3박4일짜리 압축된 추천코스입니다.(목요일 출국, 일요일 귀국으로 일정을 잡으면 휴 
          가를 이틀만 내면 가능하겠지요.)</p><p><br></p><p>교토는 세계문화유산만 17곳이요, 그 수를 헤아리기 힘든 사찰이나 신사를 비롯 명소들이 너무 많기에 한 
          달을 교토 여행에 투자하더라도 시간이 모자라지만, 또 그렇게 큰 도시가 아니고 주요 관광지가 영역 단위로 모여있기 때문에 동선만 효율적으로 짠다면 3박4 
          일 정도의 일정이라도 교토의 진수를 엿볼 수 있습니다.</p><p><br></p><p>주로 교토를 오사카를 기점으로 해 나라나 고베와 함께 하루코스로 다녀오는 분들이
           많은데요. 이 추천코스를 참조삼아 교토에 묵으면서 오롯이 4일을 교토에 투자해보시기 바랍니다.</p><p><br></p><p>교토여행의 최적기는 매화와 벚꽃이 만발
          하는 봄(3월 말~4월 중순), 단풍의 절정기간인 가을(11월 중순~12월 초)이 가장 좋으며, 겨울에 눈이 온다면 또 환상적인 여행을 할 수 있을 것입니다. </p><p><br></p><p>상대적으로 여름은 교토 특유의 정취는 있으나 상상 외로 무척 더워 여행에 좋은 시기는 아닙니다. 자, 그럼 일자별로 하나하나 동선을 정리해보 
          니 교토여행 계획이 있으신 분들은 유용하게 참조바랍니다.</p><p><br></p><p><br></p><p><br></p><p><br></p><p class="ql-align-center"><a href="http://image.chosun.com/sitedata/image/201310/07/2013100702150_1.jpg" rel="noopener noreferrer" target="_blank" style="color: rgb(34, 34, 34);"><img src="http://image.chosun.com/sitedata/image/201310/07/2013100702150_1.jpg" alt="바쁜 직장인을 위한 일본 교토여행 3박4일 추천코스"></a></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><h3><strong>■ 교토는 어떻 
          게 가면 좋을까?</strong></h3><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><p>우리나라에서 비행 편 많기로 손꼽히는 공항 중  
          하나가 바로 오사카 간사이 공항일 터. 인천공항에서는 물론, 서울 김포, 부산 김해공항에서 매일 다수의 비행기가 간사이 공항으로 뜬다. 비행시간은 서울 기
          준 1시간 반 가량이며, 관광객이 많이 이용하는 공항인 만큼 간사이 공항의 입국 수속도 비교적 간편하다.</p><p><br></p><p>대한항공, 아시아나를 비롯, 제주
          항공, 이스타항공, 티웨이, 피치항공, 에어부산(김해) 등의 저가항공이 다양하게 운행되고 있으며 일찍 표를 예약한다면 저가항공의 경우 세금 포함 20만원 후
          반~30만원대 초반 가격으로도 왕복 항공권을 충분히 구입할 수 있다.</p><p><br></p><p>아시아나와 대한항공은 비즈니스맨들을 위해 아침 이른 시간(김포 기준
          -아시아나 08:3O, 대한항공 09:15)에&nbsp;첫비행기를 운행하고 있으므로, 첫날 하루를 길고 알차게 보내고 싶은 여행자라면 고려해보는 게 좋겠다.간사이 공 
          항에서 교토로 곧바로 가는 방법은 전철보다 리무진 버스를 활용하는 것이 편리하다.</p><p><br></p><p>전철은 오사카를 들러서 가거나 JR하루카 특급을 타야 
          하는데 자주 없거니와 가격이 2,980엔으로 비싸다. 리무진 버스 요금은 편도 2,500엔이며 정류장인 교토역 게이한 호텔까지 약 1시간 반 정도 소요된다. </p><p><br></p><p>돌아오는 차편까지 함께 끊으면 4,000엔으로 할인되니 왕복으로 끊는 게 이득이다. 버스 타는 곳은 공항 1층 8번 승차장이며 30~40분 간격으로  
          운행된다.</p><p><br></p><p><br></p><h3><strong>■ 숙소는 어떻게 잡으면 좋을까?</strong></h3><p><br></p><p><br></p><p>관광도시답게 다양한 숙소가 많은 
          교토지만 봄,가을철 성수기에는 일본 내수객들이 많이 몰리기 때문에 일찍 방을 잡는 게 좋다. </p><p><br></p><p>일본 호텔을 예약할 때 웬만한 호텔 예약사 
          이트에서 쉽게 원하는 숙소를 고를 수 있지만 일본의 대표적 호텔 사이트인 '자란넷(<a href="http://www.jalan.net%29%27/" rel="noopener noreferrer" target="_blank" style="color: rgb(34, 34, 34);">http://www.jalan.net)'</a>을 이용하면 구석구석 숨어있는 숙소까지 예약이 가능하다.</p><p><br></p><p>(일본 
          어 사이트지만 크롬 브라우저 자동번역이나 번역기를 쓰면 일본어를 몰라도 예약 절차가 그렇게 어렵지 않다. 일본의 대표적 온라인 쇼핑몰 '라쿠텐'도 일본  
          내 호텔 예약서비스를 운영하고 있는데 한국어 사이트 (<a href="http://www.travel.rakuten.co.kr/" rel="noopener noreferrer" target="_blank" style="color: rgb(34, 34, 34);">http://www.travel.rakuten.co.kr</a>)를 이용하면 보다 편하게 숙소를 예약할 수 있다.</p><p><br></p><p>숙소를 선택할 때 무엇보다  
          중요한 것은 위치. 웬만한 버스가 다 지나가는 교토역 주변과, 주요 관광명소가 몰려있는 기온 일대, 그리고 번화가인 시조 가와라마치나 시조 오미야 일대에 
          숙소를 잡으면 동선을 짜기에 효율적이다. </p><p><br></p><p>싱글 기준으로 1박에 10만원 정도면 어지간한 비지니스 호텔을 구할 수 있으며, 금전적 여유가  
          있다면 하루 정도는 고색창연한 료칸에서 묵어보는 것도 좋겠다. </p><p><br></p><p>보다 저렴한 숙소를 원하거나 가족 단위의 여행자라면 헨카(<a href="http://www.hennka.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(34, 34, 34);">http://www.hennka.com</a>) 교토하우스(<a href="http://www.kyoto-house.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(34, 34, 34);">http://www.kyoto-house.com</a>) 같은 한인 민박을 선 
          택하는 것도 좋다. 가격은 도미토리 기준으로 1인당 1박에 3,000엔 정도면 숙박이 가능하다. </p><p><br></p><p>두 민박 다 오랫동안 운영을 해왔으며 평이 좋
          은 편이다. 위치는 두 곳 다 교토역 남쪽에 위치해 있는데 교토역 주변과 단풍명소 도호쿠지, 영화 &lt;게이샤의 추억&gt; 촬영지인 후시미이나리타이샤 등의 
          남부 명소를 둘러보기에 좋다.&nbsp;&nbsp;</p><p><br></p><p><br></p><p><br></p><h2>1일차 - 기온마치</h2><p><br></p><p><br></p><p>이른 아침에 한국에서 
          교토로 출발을 한다면 교토에 도착하시는 시간은 대략 점심 무렵이 됩니다. </p><p><br></p><p>숙소에 체크인을 하고 나면 1일차는 오후 한나절 정도의 시간을
           여행에 투자할 수 있는 셈이지요. 숙소를 중심가인 기온 인근이나 교토역에 잡았다면 첫 날은 교토 관광의 가장 중심지인 기온과 기요미즈데라 쪽을 둘러보면
           좋습니다. </p><p><br></p><p>마이코(게이샤)들이 나오는 거리인 기온 하나미코지와 교토의 으뜸가는 제1명소인 기요미즈데라(청수사)는 도보로 30분 정도면 
          갈 수 있기 때문에 한 코스로 묶으면 좋습니다.</p><p><br></p><p>기요미즈데라는 어차피 걸어서 올라가야 하므로 기온 쪽을 먼저 둘러본 후 올라가는 길에 가
          장 교토다운 거리인 네네노미치를 지나가면 이 쪽의 명소인 야사카 신사, 마루야마 공원, 치혼인, 고다이지들을 자연스럽게 지나갈 수 있고, 기요미즈데라 인 
          근에서 유명한 돌계단 길인 산넨자카와 이넨자카도 지나갈 수 있습니다. </p><p><br></p><p>기요미즈데라는 1시간~1시간 30분 정도 관람하면 충분하고 내려올 
          땐 야사카 노토라는 탑이 있는 길로 오면 다시 금방 기온으로 갈 수가 있습니다.</p><p><br></p><p>이제 일본에서도 교토에서만 볼 수 있는 게이샤들의 출근  
          시간은 오후 5시 무렵인데요. 이쯤 기온에 다시 돌아와 게이샤들과의 조우를 기대해보고, 만약 게이샤들이 더 많이 출몰(?)하는 곳을 가고 싶다면 기온에 있는
           절인 겐닌지 맞은편에 있는 미야가와초에 가면 됩니다. </p><p><br></p><p>미야가와초는 가모가와(가모 강) 바로 옆에 있어 쉽게 발견이 가능하며 어스름이  
          내리면 게이샤들이 가로등 아래로 총총히 걸어가는 모습을 많이 볼 수 있습니다.</p><p><br></p><p>그렇게 게이샤들까지 만났다면 늦은 저녁식사와 술자리를 
          위해 가모 강을 끼고 있는 유흥가인 본토초에 가면 첫날 교토에서의 밤을 아주 낭만적으로 보낼 수 있을 겁니다.</p><p><br></p><p> 첫날 코스는 차로 이동할 
          일이 없고 오롯이 발로 걸어다녀야 하는데 첫날 체력이 '빵빵'할 때인만큼 힘들더라도 부지런하게 다녀봅시다.</p><p><br></p><p><br></p><p><br></p><p><br></p><p class="ql-align-center"><a href="http://image.chosun.com/sitedata/image/201310/07/2013100702150_3.jpg" rel="noopener noreferrer" target="_blank" style="color: rgb(34, 34, 34);"><img src="http://image.chosun.com/sitedata/image/201310/07/2013100702150_3.jpg" alt="바쁜 직장인을 위한 일본 교토
          여행 3박4일 추천코스"></a></p><p><br></p><p><br></p><h2>2일차 - 아라시야마</h2><p><br></p><p><br></p><p>둘째날은 첫날 아주 좁은 지역을 돌아봤으니 스
          케일 크게 멀리 돌아봅시다. 아침 일찍 일어나 출발해야 할 곳은 교토 서부의 명소인 아라시야마 지역입니다. </p><p><br></p><p>교토를 방문한 많은 사람들이
           가장 좋았던 곳 1순위로 꼽는 아라시야마는 대자연 속에 호즈가와란 강이 평화롭게 흐르는 곳으로 교토에서도 으뜸가는 아름다운 정원이 있는 절인 덴류지와 
          약 2km 이상의 아름다운 대나무길이 펼쳐지는 치쿠린이 무척 유명한 곳입니다.</p><p><br></p><p>오전부터 사시사철 수많은 관광객들로 붐비기에 아침 일찍 가
          면 좋으며, 조금 더 깊숙한 곳인 사가 지역까지 도보로 걸어가보는 것도 좋은데 "여기서 한번쯤은 살아보고 싶다"란 생각이 들 정도로 아름답고 목가적인 마을
           풍경이 펼쳐집니다.</p><p><br></p><p>아라시야마를 가는 방법은 전철과 버스 등 여러가지 방법이 있는데 가장 좋은 것은 교토의 노면전차인 한량짜리 란덴연
          선을 타고 가는 것입니다. 교토 중심가인 시조 오미야역에서 10분 단위로 출발하는데 종점이 바로 또 아라시야마역이고 바로 앞에 덴류지와 치쿠린이 있어 더 
          효율적입니다.</p><p><br></p><p>차장 한명이 운전부터 검표까지 혼자 다 하는 란덴연선은 아날로그적인 향수를 진하게 느낄 수 있는 또 하나의 교토 명물이기
          도 하니 아라시야마를 갈 땐 꼭 란덴연선을 타봅시다. </p><p><br></p><p>500엔짜리 종일권을 끊으면 하루종일 란덴연선이 지나가는 명소들을 다 가볼 수 있는
          데 그래서 아라시야마 이후의 일정은 란덴연선이 다니는 노선 위주로 짜면 좋습니다.(※한글로 된 란덴연선 노선 관광지도를 파일로 첨부했으니 다운받아서 활 
          용 바랍니다.)</p><p><br></p><p>아라시야마와 사가를 다 구경했다면 점심식사를 해야 할 시간. 아라시야마에서 식사를 하고 다시 란덴연선을 타고 시내로 가 
          는데 중간에 가타비라노쓰지란 역에서 기타노선으로 환승하면 료안지, 묘신지, 금각사, 기타노텐만구 같은 교토 북서부의 명소를 둘러보기 편합니다. </p><p><br></p><p>봄에 벚꽃이 만개할 때 이 란덴연선이 지나가는 우타노역과 나루타키역 사이의 벚꽃터널로 전차가 지나가는 모습 또한 봄에 간다면 꼭 놓치지 말아 
          야 할 아름다운 장면이기도 합니다.</p><p><br></p><p>기타노선의 종점인 기타노하쿠바이초역에 내리면 학문의 신을 모시는 기타노텐만구가 바로 옆에 있는데 
          3월 말이면 매화가 만발하는 절경을 선사하는 곳이며 바로 옆의 킨카쿠지(금각사)도 놓치지 말아야 할 교토의 으뜸가는 명소입니다. 시간적 여유가 있다면 두 
          군데를 다 둘러보고, 시간이 없다면 한 군데만 봐도 부족함은 없습니다.</p><p><br></p><p>그렇게 사찰을 보고 나서 저녁 무렵엔 옛날 교토에서 기모노를 만드
          는 상인들이 살았던 오래된 거리인 니시진을 산책해 봅시다. 교토 전통목조가옥인 마치야가 잔뜩 있는 이곳은 교토에서 가장 서민적이고 오래된 풍경을 보여주
          는 곳이기도 합니다. </p><p><br></p><p>이 날 저녁은 발길이 닿는 데로 니시진 곳곳에 있는 오래된 가정식 식당에서 식사와 맥주 한잔을 해도 교토의 서민적 
          문화를 즐겨보는 좋은 경험이 될 것입니다.</p><p><br></p><p><br></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><p class="ql-align-center"><a href="http://image.chosun.com/sitedata/image/201310/07/2013100702150_5.jpg" rel="noopener noreferrer" target="_blank" style="color: rgb(34, 34, 34);"><img src="http://image.chosun.com/sitedata/image/201310/07/2013100702150_5.jpg" alt="바쁜 직장인을 위한 일본 교토여행 3박4일 추 
          천코스"></a></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><h2>3일차 - 교토의 동쪽</h2><p><br></p><p><br></p><p>첫째날과 둘째날을 소화하고 나면 몸이 좀 노골노골, 피곤함이 몰려오는 시점이겠지요. 하지 
          만 합! 힘을 냅시다. 교토의 갈 곳은 아직 너무 많이 남아있으니 말이지요. 어제 2일차에 교토의 서쪽을 돌았다면 3일차는 동쪽으로 동선을 짜고 돌아봅시다.</p><p><br></p><p>이른 오전에 가면 좋은 곳은 봄의 벚꽃과 가을의 단풍이 너무나 아름다운 철학의 길 지역입니다. 일본어로 '데츠카쿠노미치'라고 불리는 채 
          2km가 안 되는 이 길은 교토의 철학자 니시다 키타로가 아침산책 중에 다양한 사색을 했다고 해서 철학의 길이라고 불리게 되었습니다.</p><p><br></p><p>이  
          철학의 길만 보고 가도 괜찮을 텐데 이 길은 교토의 아름다운 절 중 으뜸인 긴카쿠지(은각사)와 난젠지를 잇는 길이기도 하기에 긴카쿠지와 난젠지를 함께 동 
          선에 넣고 움직이면 아주 효율적인 반나절 코스가 됩니다.</p><p><br></p><p>은각사(북쪽) 쪽에서 출발하든 난젠지(남쪽) 쪽에서 출발하든 아무 상관이 없으며
           두 절 외에 가을철 교토에서 가장 빨간 단풍이 드는 에이칸도를 추가해도 좋습니다.</p><p><br></p><p>개인적으로 금각사보다 은각사가 더 아름다운 절이라고
           생각하는데 일본 특유의 모래정원 '가레산스이'가 있는 은각사의 정원 또한 가레산스이의 대표격인 료안지의 그것에 못지 않으며, 난젠지는 100년 전부터 인 
          근의 비와호수로부터 교토 시민의 식수를 공급하는 역할을 하는 아치형의 수로각이 있어 꼭 가봐야 할 절이기도 합니다.</p><p><br></p><p>특히 난젠지의 호조
          정원(별도 입장료 400엔)은 아기자기한 교토 정원 문화의 진수를 볼 수 있는 곳으로, 이 곳을 비롯해 철학의 길 일대를 구경하고 나면 아마 은밀한 교토의 속 
          살을 만나고 온 듯한 느낌이 들 것입니다.</p><p><br></p><p>이 지역에서 점심을 먹고 나면 이제 좀 멀리 발길을 돌려야 할 때입니다. 교토역까지 버스나 전철
          을 타고 간다음 더 남쪽으로 두 정거장인 JR이나리역에 내리면 아주 독특한 신사를 만날 수 있는데요.</p><p><br></p><p>바로 영화 &lt;게이샤의 추억&gt;에  
          등장한 후시미이나리타이샤란 곳입니다. 주홍색 기둥이 그 끝을 알 수 없이 수천 개 넘게 줄지어 서있는 곳은 교토에서도 가장 독특한 장관을 선사하는 곳으로
           전설 속 세계에 들어온 듯한 묘한 신비감을 선사해줍니다.</p><p><br></p><p>그리고 만약 단풍철에 간다면 이나리타이샤 바로 옆의 도호쿠지도 가봅시다. 교 
          토 사람들이 단풍이 가장 아름다운 절 1순위로 꼽는 도호쿠지는 가을철이면 인산인해를 이루지만 꼭 한번 가볼 만한 아름다운 사찰입니다.</p><p><br></p><p><br></p><p><br></p><p class="ql-align-center"><a href="http://image.chosun.com/sitedata/image/201310/07/2013100702150_7.jpg" rel="noopener noreferrer" target="_blank" style="color: rgb(34, 34, 34);"><img src="http://image.chosun.com/sitedata/image/201310/07/2013100702150_7.jpg" alt="바쁜 직장인을
           위한 일본 교토여행 3박4일 추천코스"></a></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><h2>4일차 - 교토역 주변 산책</h2><p><br></p><p><br></p><p>교토의 명소는 왜  
          이렇게 많은지 3일동안 아무리 부지런하게 움직여도 아직 가야할 곳들이 너무 많습니다. 그러나 어느덧 한국으로 돌아가야 할 날. 이번 여행에서 가보지 못한 
          곳은 다음 교토여행 때를 기약하며 약 한 나절 정도 남아있는 교토에서의 마지막 하루를 또 의미있게 음미해야겠지요. </p><p><br></p><p>마지막 날은 어차피 
          교토역에서 리무진 버스를 타고 간사이 공항으로 돌아가야 하기 때문에 교토역이나 숙소에서 멀리 떨어진 곳으로 가기엔 부담이 됩니다. 주요 방문지를 교토역
           주변으로 잡아야 하는 이유인데요.</p><p><br></p><p>아침 일찍 산책을 하고 싶다면 옛날 일본의 천황이 살았던 교토황궁이 있는 교토교엔(공원)으로 가봅시 
          다. 교토황궁은 어차피 허가를 받지 않으면 들어가지 못하고 아름답게 잘 꾸며진 교토공원에서 여유있게 산책하며 이제까지의 일정을 정리해봅시다. </p><p><br></p><p>그리고 바로 옆의 니조성을 가도 좋을텐데 이제까지 계속 절이나 신사, 성만 다녔으니 그런 건물들이 좀 지겨운 사람들을 위해 개인적으로 교토만화 
          박물관을 가보길 추천드립니다.</p><p><br></p><p>교토는 또 일본의 유명한 만화가들의 고향으로 유명한데 &lt;아톰&gt;을 그린 데즈카 오사무가 바로 교토 출
          신으로서 실제로 교토는 일본 만화의 메카이기도 합니다. </p><p><br></p><p>교토만화박물관은 데즈카 오사무를 비롯한 일본 만화가들의 원본 그림이나 다양한
           자료들이 잘 보관되어 있으며 어느 곳이든 비치된 만화를 맘껏 볼 수 있는 만화애호인의 천국이기도 합니다. 만화를 좋아한다면 꼭 가봐야할 곳이겠지요.</p><p><br></p><p>그렇게 오전을 보내고 나면 이제 호텔로 돌아가 체크아웃을 해야 할 시간. 가장 늦게 돌아오는 항공권을 끊었다 하더라도 교토역에서 최소한 오
          후 3시~4시에는 간사이 공항으로 출발해야 할 것입니다. 체크아웃 이후 짐을 로비에 맡기고 남은 시간은 쇼핑에 할애해 봅시다.</p><p><br></p><p>교토 최대  
          중심가인 시조 가라와마치 거리의 다양한 백화점을 가도 좋을 것이고, 거리 안 쪽에 있는 교토 사람들의 부엌 니시키 시장을 가서 주전부리 및 기념품을 사도 
          좋을 것입니다. 그렇게 풍물 구경을 한 다음 공항에 늦지 않도록 출발을 하도록 합시다. </p><p><br></p><p>간사이공항으로 가는 리무진 버스는 올 때와 마찬 
          가지로 게이한 호텔 앞에서 출발하며, 게이한 호텔 1층에 버스대합실이 마련되어 있습니다.</p><p><br></p><p><br></p><p><br></p><p class="ql-align-center"><a href="http://image.chosun.com/sitedata/image/201310/07/2013100702150_9.jpg" rel="noopener noreferrer" target="_blank" style="color: rgb(34, 34, 
          34);"><img src="http://image.chosun.com/sitedata/image/201310/07/2013100702150_9.jpg" alt="바쁜 직장인을 위한 일본 교토여행 3박4일 추천코스"></a></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><p>자, 이렇게 3박4일이라는 제한적 시간동안 효율적으로 교토의 주요 명소를 돌아
          볼 수 있는 추천코스를 소개했는데요. </p><p><br></p><p>물론 여기에 등장한 명소는 교토의 수많은 명소 중에서 극히 일부일 따름이며, 자신의 취향이나 기호
          에 따라 얼마든지 다른 곳을 가봐도 좋고 또 만족감을 줄 것입니다. 단 위 코스는 주요 명소들을 하루에 효율적으로 가볼 수 있게 지역별로 묶은 것이기에 위 
          일정을 소화하신다면 시간의 허비는 크게 줄일 수 있을 것입니다.</p><p><br></p><p>그리고 개인적으로 사진을 좋아하는 만큼 가장 시각적으로 인상적이고 아 
          름다운 곳 위주로 소개했기에 교토로 사진여행을 떠나신다면 더 효과적인 코스일 것입니다. 아무쪼록 교토여행을 계획 중인 분들께 조금이나마 도움이 되길 바
          라며 지난한 포스팅을 마무리합니다.</p><p><br></p>`,
          createdAt: '2021-08-25 02:08:21.275116',
          updatedAt: '2021-08-25 02:08:21.275116',
          country: <any>2,
          user: <any>1,
        },
        {
          id: 7,
          code: 'VN',
          region: 'Hanoi, Vietnam',
          lat: 21,
          lng: 105.75,
          thumbnail:
            'https://fall-in-asia.s3.ap-northeast-2.amazonaws.com/thumb/1629253905584_hssss.jpg',
          title: '하노이에 여행한다면 꼭 해봐야 할 리스트',
          hit: 103,
          content: `<h1><strong>여행을 하기 전
          에 알아 두면 좋은 팁</strong></h1><p><br></p><p><br></p><p>무엇보다도 꼭 알아 둬야 할 사실은, 하노이는 교통이라는 측면에서 바라보면 엄청나게 붐비는 
          도시입니다. </p><p><br></p><p>자동차를 이용해서 여행하는 것도 좋은 선택이지만 최적의 옵션이라고 볼 순 없습니다. </p><p><br></p><p>도시 여행의 경우, 
          가장 좋은 선택은 자전거, 오토바이 또는 오토바이 택시(Xe-Om)입니다. ‘그랩’이라는 동남아 판 ‘우버’가 오토바이 택시 서비스를 제공하기 때문에, 하노이의 
          여행자들은 더 쉽게 하노이를 즐길 수 있게 되었습니다.</p><p><br></p><p>여러분이 알아야 할 또 다른 사실은 베트남은 여름에 여행했을 때 더 생동감 있고  
          이국적이라는 것입니다. 되도록이면 여름에 베트남을 방문해서 베트남 만의 진정한 아름다움을 감상하고, 만끽할 수 있으면 좋겠죠?</p><p><br></p><p>마지막 
          으로, 여행은 가고 싶은데, 같이 갈 사람이 없다거나, 여행지에서 동행과 함께하고 싶다면 여행을 예약하는 것도 좋은 선택이 될 수 있다는 거에요! </p><p><br></p><p>다른 사람들과 함께 여행지를 누비며 좋은 추억을 만들어 나가는 것도 여행자만이 누릴 수 있는 특권이겠죠? </p><p><br></p><p>자, 본격적으로 일주
          일 동안 하노이에서 해야 할 일들에 대한 리스트로 넘어가겠습니다. 참, 이 가이드는 일주일의 일정표 형식으로 구성되어 있으니, 각자의 계획에 맞게, 일정에
           맞춰서 조정해서 여행하시면 좋을 것 같아요!</p><p><br></p><p><br></p><p><br></p><h2><strong>Day 1: 하노이 시티 투어</strong></h2><p><br></p><p>하노 
          이는 베트남의 수도이니만큼 베트남 여행 일정을 시작하기 딱 좋은 장소입니다. </p><p><br></p><p>시작이 반이라고, 하노이에 대해 철저히 알고 가면 좋은 여
          행에 되겠죠? </p><p><br></p><p>첫 날은 하노이를 유명하게 만드는 유적지에 대해 일종의 ‘수학여행’ 같은 역사 탐방을 추천 드립니다. 그 전에, 아침 일찍  
          일어나 하노이의 심장이라 할 수 있는 호안끼엠(Hoan Kiem) 호수를 방문해서 신선한 공기를 만끽하시는 것도 좋고, 이른 아침부터 태극권을 수련하시는 어르신
          , 축구 연습을 하는 아이들을 보며 베트남만의 분위기를 느끼시는 것을 추천 드립니다.</p><p><br></p><p>‘수학여행’ 의 첫 번째 장소는&nbsp;<a href="https://blog.inspitrip.com/7964/a-guide-to-ho-chi-minh-mausoleum/" rel="noopener noreferrer" target="_blank" style="color: rgb(237, 69, 94);">호치민 묘 (Ho Chi Minh Mausoleum)</a>&nbsp;입니다. </p><p><br></p><p>독립을 위해 지치지 않고 싸워서 마침내 나라를 자유로 이끌었던 베트남의 영웅이자, ‘엉클 호’  
          라고 불리는 호치민의 마지막 안식처이죠. </p><p><br></p><p>이 건물은 건축적, 역사적 가치가 크다고 볼 수 있습니다. 호치민 묘는 모스크바에 있는 러시아 
          의 혁명가, 레닌의 묘에서 크게 영감을 받아 제작되었고 거기에 베트남 특유의 건축적 요소들이 잘 융화되어 만들어 졌습니다. </p><p><br></p><p>호치민의 이
          름이 조각되어 있는 입구의 자주색 조각을 제외하고는 장식을 최소화하여 단순하고 엄숙하게 만들어 졌죠. 석재를 사용하여 베트남의 멋을 잘 보여 주는 호치 
          민 묘 바로 옆에는 또 다른 관광 명소인&nbsp;<em>일주사(One Pillar Pagoda)</em>가 있습니다</p><p><br></p><p><br></p><p><br></p><p><img src="https://i0.wp.com/storage.googleapis.com/inspitrip-blog/kr/2019/03/1faab13e-%ED%98%B8%EC%B0%8C%EB%AF%BC-%EB%A7%88%EC%9A%B0%EC%86%94%EB%A0%88%EC%9B%80.jpg?w=696&amp;ssl=1"></p><p><br></p><p><strong><em>호찌민 마우솔레움</em></strong></p><p><br></p><p><br></p><p>하노이로 여행을 왔다면 당연히 방문해야 하는  
          곳은&nbsp;<a href="https://blog.inspitrip.com/7606/temple-of-literature-a-guide-to-vietnams-first-national-universities/" rel="noopener noreferrer" 
          target="_blank" style="color: rgb(237, 69, 94);">하노이 문묘(Temple of Literature)</a>&nbsp;라고 할 수 있습니다. </p><p><br></p><p>하노이 공자묘 라 
          고도 불리는 이곳은1070년 리탄통(Ly Thanh Tong) 황제가 공자의 학덕을 기리기 위해 세운 사원이며, 베트남 최초의 대학입니다. </p><p><br></p><p>베트남의 
          몇 안 되는 절 중에 하나이고 베트남의 정신적, 학문적 중심지로서의 역할을 한다고 할 수 있습니다. 여러 개의 전각, 마당, 동상, 의사들의 방이 있는 이 곳
          에서 예식, 공부, 과거시험이 치러지기도 했다고 합니다.</p><p><br></p><p><br></p><p><img src="https://i2.wp.com/storage.googleapis.com/inspitrip-blog/global/2018/04/van-mieu.jpg?w=696&amp;ssl=1"></p><p><br></p><p><em>Instagram: @wanoneprem</em></p><p><br></p><p><br></p><p>지금까지 하노이에서 꼭 봐
          야 할 곳을 추천 드렸습니다. </p><p><br></p><p>또한 이 외에도 꼭 가 봐야 할 곳을 더 말씀 드리자면, 밧쨩 도자기 마을(Bat Trang pottery village), 쩐 꾸
          옥 사원(Tran Quoc Pagoda)<em>,</em>&nbsp;올드쿼터(the Old Quarter)<em>,</em>&nbsp;민족학 박물관(Ethnology Museum) 등 다양합니다!</p><p><br></p><p>시
          간을 최대한 활용해서 즐거운 여행을 즐기려면 하노이의 베트남 현지인을 찾아 하루 일과를 보다 효율적이고 쉽게 계획하면 좋겠죠!</p><p><br></p><p><br></p><p><br></p><h2><strong>Day 2: 베트남의 손꼽히는 유적지인 짱 안 경관(Trang An Complex)과 바이딘 사원(Bai Dinh Pagoda) 탐방</strong></h2><p><br></p><p><br></p><p>자, 이제 하노이를 넘어 다른 곳을 탐험 해 볼 시간입니다. 짱안 경관(Trang An Complex)과 바이딘 사원(Bai Dinh Pagoda)이 있는 닌빈(Ninh Binh)으로의 1 일 투어로 이동해 볼까요? 두 곳 모두 베트남 관광객에게 아주 인기가 있는 볼거리죠.</p><p><br></p><p><br></p><p><br></p><p><img src="https://i1.wp.com/storage.googleapis.com/inspitrip-blog/global/2018/04/35532893_416326602184600_4388560062218502144_n.jpg?w=696&amp;ssl=1"></p><p><br></p><p><em>Instagram @rhianna_1994</em></p><p><br></p><p><br></p><p>바이딘 사원(Bai Dinh Pagoda)은 약 700헥타르 정도 되며 동남 아시아에서 가장 큰 사원입 
          니다. </p><p><br></p><p>동남아에서 가장 큰 탑과 많은 동상들이 바이딘 사원에 있죠. 주차장에서 전기차를 빌려서 입구로 가도 되고, 약 4.5km되는 거리이기
           때문에 걸어서도 갈 수 있습니다.</p><p><br></p><p>바이딘 사원(Bai Dinh Pagoda)은 는 신 바이딘 사원(New Bai Dinh Pagoda)과 고대 바이딘 사원(Ancient Bai Dinh Pagoda)으로 나누어져 있습니다. </p><p><br></p><p>신 바이딘 사원은 고대 바이딘 사원과는 많이 다른 새로운 구조적 특징을 가지고 있죠. </p><p><br></p><p>예를 들면 장엄한 3개의 대문이라던지, 큰 종탑, 800 스퀘어 미터 가량 되는 관세음보살 사원을 신 바이딘 사원에서 찾아 볼 수 있습니다. 고대 바이
          딘 사원에는 부처님께 예불을 드리는 동굴과, 성산을 숭배하는 성전, 성 응우 옌(Saint Nguyen) 전용 사원, 숲의 성모가 경배 받는 다고 알려진 동굴이 있습니
          다.</p><p><br></p><p><br></p><p><br></p><p><img src="https://i0.wp.com/storage.googleapis.com/inspitrip-blog/global/2018/04/trang-an.jpg?w=696&amp;ssl=1"></p><p><br></p><p><em>Instagram:@__yeenlee__</em></p><p><br></p><p><br></p><p>바이딘 사원 여행이 끝났다면, 짱안으로 가볼까요? </p><p><br></p><p>짱안 경관은 고대 베트남의 유적과 빼어난 자연경관을 간직한 곳으로 2014년 베트남 최초로 유네스코 세계유산으로 등재되었습니다. </p><p><br></p><p>짱안
           경관의 지정 면적은 6172헥타르, 주변의 완충지역 면적은 6080헥타르로 참으로 엄청난 규모라고 할 수 있죠. </p><p><br></p><p>주변엔 논과 마을이 있어 도 
          착해서 짱안 강을 따라 보트 여행을 타고 동굴 단지를 탐방하고 강의 깊고 푸른 강물에서 잠시 쉬어가는 것도 좋을 듯 합니다.</p><p><br></p><p>아! 참! 2일 
          차 일정은 당일치기 여행이기 때문에 다시 하노이에 있는 숙소로 돌아가 편히 휴식을 취하면 됩니다.</p><p><br></p><p><br></p><h2><strong>Day 3-5: 하롱베 
          이로 떠나자!</strong></h2><p><br></p><p><br></p><p>단언컨대 베트남에 방문한다면 한번쯤은 꼭 하 롱 베이(<em>Ha long Bay)&nbsp;</em>를 방문해야 한다고
           생각합니다.&nbsp;</p><p><br></p><p>하 롱 베이는 다른 베트남의 관광지와는 다르게 특별하기 때문에 그 정취를 완전히 느끼고 즐기려면 여유로운 시간과 유
          람선 예약이 필수라고 할 수 있습니다. </p><p><br></p><p>특히 하 롱 베이의 자랑인 ‘하 롱 베이 럭셔리 크루즈((<em>Ha long Bay luxury Cruse)</em>’ 에선 
          여유롭고 럭셔리한 경험을 할 수 있죠.</p><p><br></p><p><br></p><p><img src="https://i1.wp.com/storage.googleapis.com/inspitrip-blog/kr/2019/03/f2320460-ha-long-bay-view.jpg?w=696&amp;ssl=1"></p><p><br></p><p><em>여행의 목표: 높은 대에서 하롱베이(Ha Long Bay)의 숨막히는 풍경으로 당신의 눈을 잘 대 
          접해주기 – Instagram @travel.asia</em></p><p><br></p><p><br></p><p>하 롱 베이 크루즈는 모든 선실에서 파노라마로 바다의 경이로운 경치와 2,000개가 넘 
          는 석회암 섬과 섬을 쉽게 감상할 수 있도록 디자인 되어있습니다. </p><p><br></p><p>크루즈에서는&nbsp;트롱 마이 섬(<em>Trong Mai Islets)</em>, 딘훙 섬(<em>Dinh Huong Islets)</em>, 호아 쿠옹 섬(<em>Hoa Cuong Islets)&nbsp;</em>과 같은 많은 아름다운 섬들을 구경할 수 있습니다. </p><p><br></p><p>섬 옆에
          는 동굴이 있어서 여행자들은 하 롱 베이에 위치한 많은 천연 동굴을 탐험할 수 있죠. </p><p><br></p><p>티엔 등 동굴(Thien Duong Cave), 성 솟 동굴(Sung Sot Cave), 트린 누(Trinh Nu Cave) 동굴과 같은 동굴들은 여러분이 하 롱 베이에서 볼 수 있는 것들이다.</p><p><br></p><p><br></p><p><br></p><p>하 롱 베이
          를 더 직접적으로 느끼고 싶다면 카약킹 만한게 없습니다. </p><p><br></p><p>카약을 타는 동안, 큰 유람선으로는 갈 수 없는 작지만 아름다운 장소에 도착해 
          서 많은 경험을 할 수 있습니다. </p><p><br></p><p>또한 수영과 보트타기를 통해 오징어 낚시를 하거나 조용한 강가를 즐기는 것도 멋진 경험이 되겠죠?</p><p><br></p><p>마지막으로, 하 롱 베이에서는, 수상가옥 투어를 즐길 수 있습니다. </p><p><br></p><p>수상가옥들이 고즈넉하고 아름답게 강가를 수놓는 모습을
           보면 누구라도 반할 수 밖에 없을 거에요. </p><p><br></p><p>수상가옥 주민들의 생활을 체험할 수도 있고, 그들의 일상적인 모습을 보며 이국적인 정취를 느
          낄 수도 있습니다.</p><p><br></p><p>드디어, 3일 간의 하 롱 베이 투어를 마치고 하노이로 돌아가 마지막을 장식할 시간입니다! 그럼 하노이로 돌아가 볼까요
          ?</p><p><br></p><p><br></p><h2><strong>Day 6 7: 이틀간의 사파(Sapa) 트레킹 즐기기</strong></h2><p><br></p><p><br></p><p>사파(<em>Sapa)</em>&nbsp;는 
          하노이에서 북서쪽으로 약 350km 떨어져 있으며 중국과의 국경 근처에 위치한 산악 마을입니다. </p><p><br></p><p>베트남 전체에서 가장 추운 지역 중 하나이
          며 숨막힐 듯한 풍경과 흥미로운 기후로 유명하죠. 사파 트레킹 투어는 사파를 가장 잘 느낄 수 있는 투어라고 할 수 있습니다. </p><p><br></p><p>시내에서  
          가장 아름다운 산책로만을 찾아다니며 단 하루 만에 사계절을 체험할 수 있는 투어입니다. </p><p><br></p><p>해돋이와 상쾌한 봄 공기, 낮에는 따뜻한 여름날
          , 또 저녁에는 선선한 가을 날씨와 자기 직전엔 서늘한 겨울밤까지, 사계절을 모두 느낄 수 있습니다.&nbsp;</p><p><br></p><p>또한 다양한 문화를 경험할 수 
          있는 소수민족 주민들과 함께해도 즐거운 여행이 될 것입니다. 사파에서 숨막히는 자연을 눈으로 담고 사진으로 찍기 위해서는 스케줄을 짜서 사파에서 홈스테
          이를 체험해 보시기 바랍니다.</p><p><br></p><p><br></p><p><img src="https://i2.wp.com/storage.googleapis.com/inspitrip-blog/global/2018/04/sapatrekking.jpg?w=696&amp;ssl=1"></p><p><br></p><p><em>Instagram: @shiiyng.ang</em></p><p><br></p><p><br></p><p>사파여행의 첫날은 트레킹이 시작되는 캣캣 (<em>Cat Cat)</em>마을에서 시작됩니다. 캣캣마을에서는&nbsp;관광뿐만 아니라 지역 생활에 대해서도 배울 수 있죠 사파의 자연폭포뿐만 아니라 프랑스인들이 건 
          설한 수력발전소를 여행할 수 있습니다.</p><p><br></p><p>둘째 날에는 본격적인 사파 트레킹(Sapa trekking)이 시작됩니다. </p><p><br></p><p>호앙 린 손(Hoang Lien Son)산의 장엄한 풍경을 감상하면서 산간 지역에서 쌀을 재배하는 주요 방법 인 계단식 논을 거닐 수도 있죠. 트레킹 코스는 약 10-12km이기 때문에 
          3~4시간 동안 걸어야 합니다. 편한 워킹화를 챙겨오는 것을 잊지 마세요!</p><p><br></p><p>사파에서의 트레킹을 마지막으로 환상적인 하노이에서의 1주일 휴 
          가도 끝이 나게 됩니다. 제 포스팅의 투어 가이드를 통해서 하노이에서의 휴가를 계획하시는데 많은 도움이 되길 바라요! 베트남을 즐기세요!</p><p><br></p><p><br></p><p>출처 : https://inspitrip.com/blog/kr/289/one-week-in-hanoi-travel-guide/</p><p><br></p><p><br></p><p><br></p><p><br></p>`,
          createdAt: '2021-09-01 03:59:24.000000',
          updatedAt: '2021-09-01 03:59:24.000000',
          country: <any>7,
          user: <any>1,
        },
        {
          id: 8,
          code: 'TH',
          region: 'Pattaya, Chon Buri, Thailand',
          lat: 12.9231,
          lng: 100.872,
          thumbnail:
            'https://fall-in-asia.s3.ap-northeast-2.amazonaws.com/thumb/1629256166167_pattaya.jpg',
          title: '낭만 가득한 휴양지, 태국 파타야 여행을 100배 즐기는 방법!',
          hit: 86,
          content: `<h1><strong>낭만 가득한 휴
          양지! 태국 파타야 여행즐기기</strong></h1><p><br></p><p><br></p><p>일년 내내 전 세계에서 찾아오는 관광객을 넘쳐나는 파타야는 태국에서도 손꼽히는 휴 
          양지에요. </p><p><br></p><p>열대의 낭만이 가득한 해변에서 아늑한 휴식을 취할수있고 아이들과 깨끗한 바다에서 해양스포츠를 즐기며 휴식을 취할수있는곳 
          이에요</p><p><br></p><p>다양한 볼거리는 물론이고 화려한 나이트라이프까지 무궁무진한 매력이 숨겨져있는 파타야 여행이에요</p><p><br></p><p>태국 여행의
           진면목을 느낄수있는 태국의 휴양지 파타야로 떠나볼까요?</p><p><br></p><p><br></p><p><br></p><p><br></p><p class="ql-align-center"><img src="https://t1.daumcdn.net/cfile/tistory/2376D14757A820082F" height="525" width="749"></p><p><br></p><p><br></p><p><strong>▶파타야</strong></p><p><br></p><p>태 
          국 동부해안에 위치해있는 파타야는 수도 방콕에서 약140km떨어져있어요. 방콕에서 파타야까지 가는길이 잘 발달돼어있어서 2~3일의 휴가지로 인기가 좋아요</p><p><br></p><p><br></p><p><br></p><p class="ql-align-center"><img src="https://t1.daumcdn.net/cfile/tistory/25390D4957A820161C" height="523" width="748"></p><p><br></p><p><br></p><iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-8817221168972778&amp;output=html&amp;h=280&amp;slotname=8513796847&amp;adk=3013112054&amp;adf=962383518&amp;pi=t.ma~as.8513796847&amp;w=336&amp;lmt=1629255965&amp;psa=0&amp;format=336x280&amp;url=https%3A%2F%2Ftravelgo.tistory.com%2F142&amp;flash=0&amp;host=ca-host-pub-9691043933427338&amp;wgl=1&amp;uach=WyJXaW5kb3dzIiwiMTAuMCIsIng4NiIsIiIsIjkyLjAuNDUxNS4xMzEiLFtdLG51bGwsbnVsbCxudWxsXQ..&amp;tt_state=W3siaXNzdWVyT3JpZ2luIjoiaHR0cHM6Ly9hdHRlc3RhdGlvbi5hbmRyb2lkLmNvbSIsInN0YXRlIjo3fV0.&amp;dt=1629255964987&amp;bpp=1&amp;bdt=772&amp;idt=131&amp;shv=r20210812&amp;mjsv=m202108100101&amp;ptt=9&amp;saldr=aa&amp;abxe=1&amp;cookie=ID%3D77800430013dd960-229ad2dd39c90030%3AT%3D1622832627%3ART%3D1622832627%3AS%3DALNI_MaiAOCSZairbpvG1u0MyWzcfHKa_A&amp;prev_fmts=336x280&amp;correlator=7016533932676&amp;frm=20&amp;pv=1&amp;ga_vid=922480695.1629044162&amp;ga_sid=1629255965&amp;ga_hid=1804795327&amp;ga_fc=0&amp;u_tz=540&amp;u_his=49&amp;u_java=0&amp;u_h=1080&amp;u_w=1920&amp;u_ah=1040&amp;u_aw=1920&amp;u_cd=24&amp;u_nplug=3&amp;u_nmime=4&amp;adx=630&amp;ady=2039&amp;biw=1903&amp;bih=880&amp;scr_x=0&amp;scr_y=0&amp;eid=182982000%2C182982200%2C20211866%2C21067496%2C31062297%2C31062093&amp;oid=3&amp;pvsid=3189419433651362&amp;pem=507&amp;ref=https%3A%2F%2Fwww.google.com%2F&amp;eae=0&amp;fc=640&amp;brdim=-1919%2C3%2C-1919%2C3%2C1920%2C2%2C1918%2C1038%2C1920%2C880&amp;vis=1&amp;rsz=%7C%7CoeEbr%7C&amp;abl=CS&amp;pfx=0&amp;fu=0&amp;bc=31&amp;ifi=2&amp;uci=a!2&amp;btvi=1&amp;fsb=1&amp;xpc=C9XED3W3C0&amp;p=https%3A//travelgo.tistory.com&amp;dtd=141" height="0" width="336"></iframe><p><br></p><p><strong>▶파타야해 
          변</strong></p><p><br></p><p>파타야를 대표하는 명소인 워킹스트리트가 있는 파타야해변은 늘 관광객으로 북적대는곳이에요. 조금 한적한 휴식을 원하면 파 
          타야 비치 남쪽의 좀띠엔이나 방살레에서 여유있는 휴식을 취할수있습니다.</p><p><br></p><p><br></p><p><br></p><p class="ql-align-center"><img src="https://t1.daumcdn.net/cfile/tistory/2377693757A8202431" height="556" width="745"></p><p><br></p><p><br></p><p><strong>▶해양스포츠</strong></p><p><br></p><p>파타야해변은 관광객을 태운보트와 바닷물이 좋지 않아 수영을즐기기에좋진 않은데요. 그래서 주변의 산호섬으로가야하는데요. 산호섬에서는 제트스키,  
          바나나보트, 페러글라이딩 등 다양한 레저스포츠를 즐길수있습니다.</p><p><br></p><p><br></p><p><br></p><p class="ql-align-center"><img src="https://t1.daumcdn.net/cfile/tistory/2758F23857A8203207" height="502" width="746"></p><p><br></p><p><br></p><p><strong>▶눙눗빌리지</strong></p><p><br></p><p>거
          대한 열대식물원인 눙눗빌리지는 파타야시내에서 약30여분 떨어져있습니다. 구경하는데 꼬박 3시간이 걸리는곳으로 규모가 크며 열대지방에서 서식하는 식물은
           물론 태국의 민속무용과 코끼리쇼도 관람하는게 가능해요</p><p><br></p><p><br></p><p><br></p><p class="ql-align-center"><img src="https://t1.daumcdn.net/cfile/tistory/252F063B57A8203F03" height="465" width="747"></p><p><br></p><p><br></p><p><strong>▶미니싸암</strong></p><p><br></p><p>미니싸암은 에
          펠탑,자금성,자유의 여신상, 앙코르와트 등 세계적인 건축물을 축소한 테마파크에요. 또한 치찬 산을 깍아 불상을 음각하고 금을 입한 황금불상 왓 까오 치찬 
          도 볼거리가많아요</p><p><br></p><p><br></p><p><br></p><p class="ql-align-center"><img src="https://t1.daumcdn.net/cfile/tistory/236A063757A8205005" 
          height="532" width="750"></p><p><br></p><p><br></p><p><strong>▶워킹스트리트</strong></p><p><br></p><p>워킹스트리트는 파타야 여행의 하이라이트에요.  
          한낮의 열기가 식으면 화려한 네온사인이 불을 밝혀요.노천카페에서 다양한 즉석공연을 즐길수있고 특히 세계3대 공연으로 이름난 파타야의 알카자쇼나 티파니
          쇼도 꼭보시는게 좋습니다</p><iframe class="ql-video ql-align-center" frameborder="0" allowfullscreen="true" src="https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-8817221168972778&amp;output=html&amp;h=280&amp;slotname=6500194444&amp;adk=3263304653&amp;adf=2574719475&amp;pi=t.ma~as.6500194444&amp;w=336&amp;lmt=1629255967&amp;psa=0&amp;format=336x280&amp;url=https%3A%2F%2Ftravelgo.tistory.com%2F142&amp;flash=0&amp;host=ca-host-pub-9691043933427338&amp;wgl=1&amp;adsid=ChEI8LztiAYQh_rLr4WVmJCsARJIAICnqJ0oB280QlHH1MYFWPay7zPh8dEVmR3H7jpInGKky5tJc30S0Yrsjxq1RJ74_qrwqUkWU7UEkRX-xVfXX52bY9qPqByK&amp;uach=WyJXaW5kb3dzIiwiMTAuMCIsIng4NiIsIiIsIjkyLjAuNDUxNS4xMzEiLFtdLG51bGwsbnVsbCxudWxsXQ..&amp;tt_state=W3siaXNzdWVyT3JpZ2luIjoiaHR0cHM6Ly9hdHRlc3RhdGlvbi5hbmRyb2lkLmNvbSIsInN0YXRlIjo3fV0.&amp;dt=1629255964988&amp;bpp=1&amp;bdt=773&amp;idt=254&amp;shv=r20210812&amp;mjsv=m202108100101&amp;ptt=9&amp;saldr=aa&amp;abxe=1&amp;cookie=ID%3D77800430013dd960-229ad2dd39c90030%3AT%3D1622832627%3ART%3D1622832627%3AS%3DALNI_MaiAOCSZairbpvG1u0MyWzcfHKa_A&amp;prev_fmts=336x280%2C336x280%2C0x0&amp;nras=1&amp;correlator=7016533932676&amp;frm=20&amp;pv=1&amp;ga_vid=848680836.1622832791&amp;ga_sid=1629255965&amp;ga_hid=1804795327&amp;ga_fc=0&amp;ga_cid=922480695.1629044162&amp;u_tz=540&amp;u_his=49&amp;u_java=0&amp;u_h=1080&amp;u_w=1920&amp;u_ah=1040&amp;u_aw=1920&amp;u_cd=24&amp;u_nplug=3&amp;u_nmime=4&amp;adx=630&amp;ady=4778&amp;biw=1903&amp;bih=880&amp;scr_x=0&amp;scr_y=1426&amp;eid=182982000%2C182982200%2C20211866%2C21067496%2C31062297%2C31062093&amp;oid=3&amp;pvsid=3189419433651362&amp;pem=507&amp;ref=https%3A%2F%2Fwww.google.com%2F&amp;eae=0&amp;fc=896&amp;brdim=-1919%2C3%2C-1919%2C3%2C1920%2C2%2C1918%2C1038%2C1920%2C880&amp;vis=1&amp;rsz=%7C%7CoeEbr%7C&amp;abl=CS&amp;pfx=0&amp;fu=0&amp;bc=31&amp;jar=2021-07-31-04&amp;ifi=3&amp;uci=a!3&amp;btvi=2&amp;fsb=1&amp;xpc=9WjPOf2ozO&amp;p=https%3A//travelgo.tistory.com&amp;dtd=2995" height="0" width="336"></iframe><p class="ql-align-center"><br></p><p><br></p><p><br></p><p><br></p><p><span style="background-color: rgb(241, 242, 246); color: rgb(67, 74, 84);">출처:&nbsp;</span><a href="https://travelgo.tistory.com/142" rel="noopener noreferrer" target="_blank" style="background-color: rgb(241, 242, 246); color: rgb(59, 175, 218);">https://travelgo.tistory.com/142</a><span style="background-color: rgb(241, 242, 246); color: rgb(67, 74, 84);">&nbsp;[여기가봤어?]</span></p>`,
          createdAt: '2021-09-11 03:09:26.334458',
          updatedAt: '2021-09-11 02:35:36.000000',
          country: <any>6,
          user: <any>1,
        },
        {
          id: 9,
          code: 'TW',
          region:
            'Taipei 101, 信義區信義路五段7號, Xinyi District, Taipei 110, Taiwan',
          lat: 25.0335,
          lng: 121.565,
          thumbnail:
            'https://fall-in-asia.s3.ap-northeast-2.amazonaws.com/thumb/1629256532402_FxX5caie56yqUbvo2DTJv1i6qm8z4ixTabBTrjod5ybTuNoXSgULp1VYMEf7QsD4Djo8y9eYnWSScpHWwPobaMktW6Q6ksMNWWVS2cUsMpKx.jpg',
          title: '대만 유명 맛집, 키키레스토랑을 가다 - 대만여행기',
          hit: 75,
          content: `<p><br></p><p>안녕하세요? 
          오늘은 지지난주에 가족과 함께 다녀온&nbsp;대만 여행의 후기를 남겨보려고 합니다.</p><p><br></p><p>맛집/관광지/호텔편으로 나누어 소개해드릴 테니 혹시 
          대만 여행을 앞두고 계신 분들께 많은 도움이 되었으면 좋겠습니다.</p><p><br></p><p>이번 여행은 대만에 갈때는 대한항공 돌아올때는 타이항공을 이용했습니
          다.</p><p><br></p><p>마일리지를 사용해서 티켓을 끊었기 때문에 따로 비행기 값은 들지 않았어요!!</p><p><br></p><p>비행기 값이 들지 않으니 아낀 돈으로 
          맛있는 거 사먹고 좋은 호텔에 숙박할 수 있어서 더더 욱 좋았던 여행이었습니다 ㅎㅎ</p><p><br></p><p>마일리지 빨리 모으는 방법은 다음 포스팅에서 자세히
           공유해보겠습니다.</p><p><br></p><p>제가 대만에 도착해서 첫 번째로 찾은 맛집은 사천요리 전문점&nbsp;키키 레스토랑이었습니다.</p><p><br></p><p><br></p><h1>키키레스토랑</h1><p><br></p><p><br></p><p><img src="https://steemitimages.com/600x0/https://steemitimages.com/DQmSkpAX5sUrekEGnf2BHPkH4beMrXEW3gxm9qcSh8yTE6A/7.JPG" alt="7.JPG"></p><p><br></p><p><br></p><p>대만에 먼저 갔던 친구로부터 '대만에&nbsp;키키 레스토랑이라는 곳이 있는데 요즘 인기가
           너무 많아 꼭 예약을 해야 먹을 수 있다' 라는 정보를 입수하고 출발 2일전에 부랴부랴 예약을 했습니다.</p><p><br></p><p>저는&nbsp;kkday.com이라는 사이 
          트에서 예약을 했는데 원하는 지점 원하는 시간의 식사권을 구매하면 자동으로 예약이 되는 시스템입니다. 도착해서 식사권을 보여주면 따로 기다릴 필요 없이
           바로 입장할 수 있습니다.</p><p><br></p><p>(<a href="https://www.kkday.com/ko/product/10066?cid=2479&amp;ud1=tw&amp;ud2=10066" rel="noopener noreferrer" target="_blank" style="color: rgb(31, 191, 143);">https://www.kkday.com/ko/product/10066?cid=2479&amp;ud1=tw&amp;ud2=10066</a>&nbsp;링크 공유합
          니다~)</p><p><br></p><p>저는&nbsp;2~3인용 식사권을 구매했는데 웬만한 인기메뉴는 다 포함되어 있고 타이완 맥주까지 포함되어 있어 더더욱 좋았습니다.</p><p><br></p><p>위에 알려드린 사이트에서 키키 레스토랑의&nbsp;옌지점, 푸싱점&nbsp;식사권을 구매할 수 있는데 저는 개인적으로 푸싱점보다는&nbsp;옌지점 
          을 추천해드립니다.</p><p><br></p><p>옌지점이 더 맛있다는 평이 많고 또 옌지점 주변이 우리나라 가로수길처럼 예쁘게 꾸며져 있어 독특한 카페와 레스토랑 
          이 많아서 식사 후 가볍게 산책하기도 좋았네요.</p><p><br></p><p><br></p><p><img src="https://steemitimages.com/600x0/https://steemitimages.com/DQmcvQPKntPCRUMUhsoQi3dtpbSY8S3zeEQYyS2sZ8SNoUN/1.JPG" alt="1.JPG"></p><p><img src="https://steemitimages.com/600x0/https://steemitimages.com/DQmVumiWdNBj93Xr4kwAPE7WfohSvCCnEycTpTvUfWZL5vx/2.JPG" alt="2.JPG"></p><p><img src="https://steemitimages.com/600x0/https://steemitimages.com/DQmUWBd3oNdTV9qYr2P5ZbuoHXyQgQfMJUoPHb5NtDW8ep1/3.JPG" alt="3.JPG"></p><p><img src="https://steemitimages.com/600x0/https://steemitimages.com/DQmNTNpdyxEWVJ7hqgJ8Qi81jVT5ud4149GiC2GdpwshdAD/4.JPG" alt="4.JPG"></p><p><img src="https://steemitimages.com/600x0/https://steemitimages.com/DQmdnwUN2sp69N763GpvRwAkdeHSh2iWfHA8Rv5xYFRcwP2/5.JPG" alt="5.JPG"></p><p><br></p><p><br></p><p>식사 후 옌지점 주변에서 산책하며 찍은 사진들입니다. 마치 중국과 일본을 섞은 듯한  
          느낌이 드는 거리였습니다.</p><p><br></p><p>대만에 와서 처음 마주한 풍경이 이렇게 예뻐서 대만이 더더욱 좋아졌어요.</p><p><br></p><p>옌지점은 MRT 궈푸
          지녠관(국부기념관)역 2번 출구로 나오면 근처에서 찾을 수 있습니다. 구글 맵을 참고하시면 더더욱 좋을 듯 합니다.</p><p><br></p><p>키키 레스토랑은 대만 
          의 배우들이 함께 모여 오픈했다고 합니다. 우리나라에도 많이 알려진 배우&nbsp;서기&nbsp;도 그 중 한명이라고 합니다.&nbsp;</p><p><br></p><p>고양이 로고
          가 곳곳에 붙어 있는데 이 고양이가 바로&nbsp;'키키 레스토랑'의 마스코트라고 합니다. </p><p><br></p><p>저도 처음에 옌지점을 찾지 못해 헤맸는데 이 고양
          이 로고가 눈에 딱 띄는 덕분에 쉽게 찾을 수 있었습니다!</p><p><br></p><p><br></p><p><img src="https://steemitimages.com/600x0/https://steemitimages.com/DQmW1ZKs5fhd5a7vSv2z86FpuUagsxUBjaNtqbkR9GgiDYf/6.JPG" alt="6.JPG"></p><p><br></p><p>이름도 예쁘고 로고도 예쁜 곳입니다. 여자분들은 더더욱 좋아하
          실 것 같아요.</p><p><br></p><p>키키 레스토랑의 인기 메뉴는&nbsp;파 볶음과&nbsp;연두부 튀김입니다. 2~3인용 식사권을 구매하실 경우 이 메뉴들이 모두 포
          함되어 있습니다.</p><p><br></p><p><br></p><p><img src="https://steemitimages.com/600x0/https://steemitimages.com/DQmaXytZR3XJVEsHb2aRD2LvzGzKWN1eJ5FrBKGMqkAiP43/9.JPG" alt="9.JPG"></p><p><br></p><h2>메뉴:파볶음</h2><p><br></p><p>처음에는&nbsp;파 볶음이 인기메뉴라고 해서 읭? 했습니다. 일단 저는  
          파를 별로 안 좋아하고 고작 파가 맛있어 봤자 얼마나 맛있겠어.. 근데 이게 대표 메뉴라고?? 라는 생각이 들었거든요.</p><p><br></p><p>그.런.데. 파볶음을 
          흰 쌀밥위에 잘 비벼 한 입 먹는 순간 그런 생각은 사르르 사라집니다 . . .!!</p><p><br></p><p><br></p><p><img src="https://steemitimages.com/600x0/https://steemitimages.com/DQmQFL6ViRBeiUqu7dyYwGzoe5hnTW26Z71FST96rpU3wRL/10.JPG" alt="10.JPG"></p><p><br></p><p>매콤짭쪼롬한&nbsp;파볶음과 흰 쌀밥은 정
          말 최고의 궁합입니다 !! 스팸과 쌀밥보다도 더 찰떡 궁합이라고 생각합니다 ㅎㅎ</p><p><br></p><p>지금도 입에서 군침이 도네요.. 또 먹고 싶네요 .. . .</p><p><br></p><p>키키 레스토랑에 가신다면 이 파 볶음과 흰 쌀밥을 주문해서 꼭꼭 같이 드셔보세요. 참고로 식사권에는 볶음밥이 포함되었고 흰 쌀밥은 포함되
          어 있지 않아 흰밥은 따로 주문해야 합니다.</p><p><br></p><p>다음은 두 번째 인기 메뉴&nbsp;연두부 튀김입니다.</p><p><br></p><p><br></p><p><img src="https://steemitimages.com/600x0/https://steemitimages.com/DQmfG8yQSxXfcyCia5tRkm4zeKVYfDwkN9W6b2HuYRNKJJJ/11.JPG" alt="11.JPG"></p><p><br></p><p><br></p><h2>메뉴 : 연두부 튀김</h2><p><br></p><p><span style="color: rgb(51, 51, 51);">저는 처음에&nbsp;연두부 튀김이라고 해서 취두부 특유의 알싸한(?) 향
          을 상상했거든요 .</span></p><p><br></p><p><span style="color: rgb(51, 51, 51);">하지만 전혀 그런 향 없이 겉은 바삭하고 속은 부드러운 연두부를 드실  
          수 있습니다.</span></p><p><br></p><p><span style="color: rgb(51, 51, 51);">저는 향신료에 대한 거부감이 큰 편인데 키키 레스토랑의 음식들은 전혀 거부 
          감 없이 잘 먹었습니다.</span>다음은&nbsp;새우 튀김입니다.</p><p><br></p><p><br></p><p><img src="https://steemitimages.com/600x0/https://steemitimages.com/DQmZbsKcjKWZMuKfH2sXSqEfaypfjrBZihkFQrruvzQJDqt/12.JPG" alt="12.JPG"></p><p><br></p><h2>메뉴: 새우튀김</h2><p><br></p><p>새우 튀김을 마요네즈(?) 맛이 나는 소스에 버무린 요리인데 특히 튀김 옷이 바삭바삭해서 맛있었습니다. </p><p><br></p><p>제 와이프는 치킨 시키면 따로 튀김 옷만 벗겨 먹는 사 
          람이라(...) 이 메뉴를 강추했습니다.</p><p><br></p><p>이것도 식사권에 포함된&nbsp;닭 튀김(?)입니다.</p><p><br></p><p><br></p><p><img src="https://steemitimages.com/600x0/https://steemitimages.com/DQmZv8d1BY9UX8B8THpjH3zjyGEtWBvzp9TBRmaRHw597DQ/13.JPG" alt="13.JPG"></p><p><br></p><h2>메뉴 : 닭 튀 
          김</h2><p><br></p><p><span style="color: rgb(51, 51, 51);">뭐.. 나쁘진 않았지만 식사권에 포함되어 강제로 먹은 느낌이라 다음에 간다면 따로 주문하지는
           않을 것 같습니다. 그럭저럭 괜찮았습니다~!</span></p><p><br></p><p><br></p><p><img src="https://steemitimages.com/600x0/https://steemitimages.com/DQmecRLvTbykpFo1pPBJy8D5susniXqdRzt8hEtWp2sACJ7/14.JPG" alt="14.JPG"></p><p><br></p><h2>메뉴 : 볶음밥</h2><p><br></p><p>볶음밥도 특별한 맛은 아니었지 
          만 맛있게 먹었습니다. 파 볶음에 흰쌀밥 비벼 먹느라 많이는 못 먹었어요.</p><p><br></p><p><br></p><p><img src="https://steemitimages.com/600x0/https://steemitimages.com/DQmXxtcFC396imjxMfSWQ2ZqZ3AyUgsfqucuXBLg7KSE2dJ/15.JPG" alt="15.JPG"></p><p><br></p><p><span style="color: rgb(51, 51, 51);">식사
          권에 포함되어 나오는&nbsp;맥주(Taiwan beer)입니다 타이완 맥주들은 대체적으로 맛있는 것 같습니다. </span></p><p><br></p><p><span style="color: rgb(51, 51, 51);">사천요리가 약간 기름기가 있어 맥주와도 잘 맞아요.</span>2~3인용 식사권에 나오는 세트는 2명이서 먹기에는 좀 양이 많았고 파 볶음과 같이 먹
          을 쌀밥이 나오지 않아 아쉬웠습니다. </p><p><br></p><p>하지만 예약을 따로 할 필요 없이 인기 메뉴를 골고루 먹어 볼 수 있다는 장점이 있었습니다. </p><p><br></p><p>다음에 다시 간다면&nbsp;파볶음과 연두부튀김은 기본적으로 시키고 다른 메뉴에도 한번 도전을 해 보고 싶네요.</p><p><br></p><p>대만에 가시는
           분들 여유가 되신다면&nbsp;키키 레스토랑에 한번 꼭 들려보세요 !</p><p><br></p><p>다음번 포스팅에서는 대만의 대표 음식&nbsp;샤오롱바오&nbsp;리뷰와&nbsp;딘다이펑 본점에서 편하게 먹는 방법 알려드리겠습니다!</p><p><br></p><p>출처 : https://steemit.com/kr/@radiologist/3gpy7q</p><p><br></p><p>작성자 :  <span style="color: rgb(48, 69, 63);">radiologist&nbsp;</span></p><p><br></p>`,
          createdAt: '2021-09-21 03:15:32.619665',
          updatedAt: '2021-09-21 03:15:32.619665',
          country: <any>4,
          user: <any>1,
        },
        {
          id: 10,
          code: 'CN',
          region: "Shanghai, People's Republic of China",
          lat: 31.1667,
          lng: 121.467,
          thumbnail:
            'https://fall-in-asia.s3.ap-northeast-2.amazonaws.com/thumb/1629257172235_201603231331-Reissue-Shanghai-Trip-01.jpg',
          title:
            '중국 발전과 중국 경제 그리고 교통의 중심지 상해. 상해 상해의 여행 명소 BEST 6',
          hit: 56,
          content: `<p><span style="color: rgb(116, 116, 116);"><img src="https://blog.hmgjournal.com/images/contents/article/201603231331-Reissue-Shanghai-Trip-01.jpg" alt="상해를 상징하는 상해
          환구금융센터 전경"></span></p><p><br></p><p><span style="color: rgb(153, 153, 153);">l 교통중심지이자 주요 여행항구인 상해는 ‘동방의 빛’, ‘동방의 진
          주’라 불립니다</span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">중국 남북 해안선의 중심지에 있는 상해는 동쪽으로는 태평양, 남쪽으로 
          는 항주만에 인접해있고 황금 수로인 장강(양쯔강) 어귀에 위치해 있는데요. </span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">작은 어항 
          에 불과했던 상해는 아편전쟁의 패배로 강제 개항하면서 아시아를 대표하는 도시가 됐습니다.</span></p><p><br></p><p><br></p><p><br></p><h1><strong>신흥 
          관광도시 상해</strong></h1><p><br></p><p><span style="color: rgb(116, 116, 116);"><img src="https://blog.hmgjournal.com/images/contents/article/201603231331-Reissue-Shanghai-Trip-02.jpg" alt="휘황찬란한 불빛이 가득한 세련된 상해의 모습"></span></p><p><br></p><p><span style="color: rgb(153, 153, 
          153);">l 상해는 역사와 문화가 한데 모인 도시로, 중국 대표 관광지라 불려도 손색이 없습니다</span></p><p><br></p><p><span style="color: rgb(109, 109, 
          109);">상해는 중국 금융과 무역, 해상 운송의 중심지입니다. </span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">전 세계 48개국 110여 개 
          도시를 연결하는 해상 교통 중심지로, 수많은 해외여행객이 오고 가는 주요 여행항구이기도 하죠. </span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">풍둥과 와이탄을 동서로 나눠 동쪽은 최첨단 초고층 빌딩의 숲을 이루고, 서쪽은 천 년의 역사가 살아 숨 쉬는 문화유산들로 조화를 이루고 있는데 
          요.</span></p><p><br></p><p><span style="color: rgb(109, 109, 109);"> 주요 관광지로는 와이탄 야경과 전통 정원을 만날 수 있는 위위엔, 루쟈주이 금융  
          지역의 마천루, 상해 주택 문화의 특징을 그대로 보여주는 석조 솟을대문 건축물, 난징루 쇼핑거리 등이 있습니다.</span></p><p><br></p><p><br></p><p><br></p><h2><strong>상해 여행의 꽃 와이탄</strong></h2><p><br></p><p><span style="color: rgb(116, 116, 116);"><img src="https://blog.hmgjournal.com/images/contents/article/201603231331-Reissue-Shanghai-Trip-03.jpg" alt="동방명주탑과 다양한 고층 빌딩이 보이는 상해 와이탄의 모습"></span></p><p><br></p><p><span style="color: rgb(153, 153, 153);">l 역사를 따라 와이탄은 고층 빌딩 숲이 가득한 ‘동양의 월 스트리트’로 변모했습니다</span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">와이탄은 외국 영사관이 많이 들어선 곳입니다. </span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">그 역사는 1845년에 시작되죠. 중국과 영국 간 회담이 있고 난 뒤, 와이탄은 영국 조계지에 속하게 됩니다. </span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">뒤이어 영국의 영사관과 회사들이 잇달아 황포강 강변에 건물을 지었고, 같은 해 황포탄 대로가 완공되었습니다. </span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">서양 교민들은 그것을 모래톱이라는 의미의 ‘The Bund’라고 불렀고, 중국인들은 와이탄이라고 불렀죠. </span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">상해가 다시 중국 금융의 중심이 되었을 때 와이탄은 변하기 시작했습니다. </span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">거대 은행들이 와이탄에 호화로운 빌딩들을 세우면서 그들의 근거지가 된 거죠. </span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">와이탄의 황포강변에 서면 맞은편 동방명주의 방송탑과 진마오빌딩, 국제컨벤션센터 등이 선명하게 보입니다.  
          고풍스러운 과거와 최신의 현재가 공존하는 이곳의 정취는 상해의 상징이 되었습니다.</span></p><p><br></p><p><br></p><p><br></p><h2><strong>100층 전망대
          에서 하늘을 걷다 상해환구금융센터</strong></h2><p><br></p><p><span style="color: rgb(116, 116, 116);"><img src="https://blog.hmgjournal.com/images/contents/article/201603231331-Reissue-Shanghai-Trip-04.jpg" alt="밤에 더 빛나는 상해환구금융센터"></span></p><p><br></p><p><span style="color: rgb(153, 153, 153);">l 상해환구금융센터는 곡선미를 통한 예술성이 특히 빼어납니다</span></p><p><br></p><p><br></p><p><span style="color: rgb(109, 109, 109);">상해환구금융센터(SWFC)는 상해 신개발지인 포동지구에 들어선 대표적 건물로 21세기, 세계 경제를 리드하는 중국을 상징하고 있습니다. </span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">중국은 상해를 21세기 아시아 금융 중심 도시로 발전시킬 전략을 가지고 있는데요. 금융의 핵심지역은 포 
          동지역입니다. </span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">상해환구금융센터 빌딩은 높이가 무려 101층인 건물로 100층에는 세계에 
          서 가장 높은(474m) 전망대가 있습니다. </span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">마치 하늘을 걷는 듯, 공중 유리 복도에서 공중
           산책을 할 수 있는 공간이죠. </span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">사각형으로 시작해 위로 올라갈수록 삼각형으로 변하는  
          묘한 형상을 하고 있고, 건물 꼭대기는 마름모꼴로 구멍이 나 있어 멀리서 보면 마치 맥주 병따개처럼 보이기도 합니다.</span></p><p><br></p><p><br></p><p><br></p><h2><strong>홍콩인가 작은 유럽인가? 신티엔띠</strong></h2><p><br></p><p><span style="color: rgb(116, 116, 116);"><img src="https://blog.hmgjournal.com/images/contents/article/201603231331-Reissue-Shanghai-Trip-05.jpg" alt="아기자기한 신티엔띠"></span></p><p><br></p><p><span style="color: rgb(153, 153, 153);">l 신티엔띠는 상해의 새로운 나이트 라이프가 펼쳐지는 곳입니다</span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">상해 신티엔띠의 역사는 그리 오래되지 않았지만, 볼거리가 매우 풍부합니다. </span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">근대 상해
          의 전통 가옥 구조인 석고문 스타일의 복고적 주택과 아름다운 서양식 별장, 성 니콜라스 대성당, 그리고 수없이 많은 명인들의 옛집이 모여있죠. </span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">신티엔띠는 유명한 술집들이 가득한 상해 번화가이기도 합니다. </span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">매일 저녁 간판에 불이 켜지면 다국적 기업의 화이트칼라 직장인들이 휴식을 즐기기 위해 이곳을 찾습니다. 너무도 다양한 
          문화와 볼거리가 있어 다소 복잡하게 느껴질 수도 있지만 여행자들의 꿈틀대는 모험심을 만족시키기엔 안성맞춤이랍니다.</span></p><p><br></p><p><br></p><p><br></p><h2><strong>쇼핑의 천국 난징루</strong></h2><p><br></p><p><span style="color: rgb(116, 116, 116);"><img src="https://blog.hmgjournal.com/images/contents/article/201603231331-Reissue-Shanghai-Trip-06.jpg" alt="명동 신세계백화점 부근을 연상시키는 난징루의 모습"></span></p><p><br></p><p><span style="color: rgb(153, 153, 153);">l 여행에서 쇼핑이 빠질 수 없죠. 상해 여행의 백미는 난징루 아닐까요?</span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">난징루는 20세기 초반 상해 최고의 번화가로 오래된 가게들이 모여 있습니다. </span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">일자로 쭉 뻗은 거리 양옆에 대형 백화점과 쇼핑 상점들이 병풍처럼 서 있죠. 미각을 자극하는 세계 각국의 음식점과 유명 호텔들도 입점해 있
          습니다. </span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">이곳은 와이탄 지역까지 도보로 이동 가능하며 황포강 건너에 보이는 포동지역 
          의 야경을 감상하기에도 최고의 위치랍니다.</span></p><p><br></p><p><br></p><p><br></p><h2><strong>부모를 위해 만든 효심 정원 위위엔</strong></h2><p><br></p><p><span style="color: rgb(116, 116, 116);"><img src="https://blog.hmgjournal.com/images/contents/article/201603231331-Reissue-Shanghai-Trip-07.jpg" alt="고풍스러운 위위엔의 모습"></span></p><p><br></p><p><span style="color: rgb(153, 153, 153);">l 18년의 효심을 가득 담은 위위엔은 베이징의
           황궁정원, 이화원을 본떠 만들었습니다</span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">상해 시내 동남쪽에 위치한 중국 전통 정원 위위
          엔은 명나라 관료 판윈두안이 부모를 위해 18년의 세월을 들여 만든 중국의 대표적인 남방정원양식입니다. </span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">당시 위위엔에 황제만 사용할 수 있었던 용 문양을 조각하면서도 용 발가락을 하나 더 만들어 역적으로 몰렸는데, 이를 가까스로 모면하면 
          서 유명세를 타기도 했습니다.</span></p><p><br></p><p><br></p><p><br></p><h2><strong>명나라 과학자의 숨결 쉬쟈후이</strong></h2><p><br></p><p><span style="color: rgb(116, 116, 116);"><img src="https://blog.hmgjournal.com/images/contents/article/201603231331-Reissue-Shanghai-Trip-08.jpg" alt="푸른
           풀밭이 펼쳐진 쉬쟈후이 공원"></span></p><p><br></p><p><span style="color: rgb(153, 153, 153);">l 쉬쟈후이는 전형적인 상해풍 문화적 특징을 가진 개방
          형 관광지입니다</span></p><p><br></p><p><br></p><p><span style="color: rgb(109, 109, 109);">쉬쟈후이는 원래 포회당, 조가빈 및 리인경 이세 강이 만나 
          는 합류지점이었습니다. </span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">명나라 과학자 서광계가 이곳에 농장을 건설하여 농업 실험을  
          했고, 저서를 편찬해 학설을 세우기도 했죠. </span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">이곳은 서광계 가족의 거주지였는데 청나라
           강희황제 때 쉬쟈후이라는 명칭을 얻게 됐습니다. </span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">1847년 천주교 강남 교구는 예수회를
           설립하여 서광계, 마테오 리치(Matteo Ricci)가 창설한 서학동점, 중학서전을 계승했습니다. </span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">그 후 과학, 기술, 문화, 교육, 출판, 자선 및 종교 등과 관련된 다양한 단체들이 하나둘씩 만들어지기 시작했죠. </span></p><p><br></p><p><span style="color: rgb(109, 109, 109);">20세기 초에 와서 중요한 문화의 요지를 형성하게 됐습니다. 명소로는 주로 서광계 묘지, 천주당, 관상대, 장서루, 서회공학 
          옛집, 백대공사옛터, 토산만 박물관 등이 있습니다.</span></p><p><br></p><p><br></p><p><span style="color: rgb(102, 102, 102);">글. 여행작가 윤은지</span></p><p><br></p><p>출처 : https://news.hmgjournal.com/TALK/Story/Reissue-Shanghai-Trip</p><p class="ql-align-right"><br></p><p><br></p>`,
          createdAt: '2021-10-08 03:26:12.489813',
          updatedAt: '2021-10-08 03:26:12.489813',
          country: <any>3,
          user: <any>1,
        },
      ])
      .execute();
    await connection
      .createQueryBuilder()
      .insert()
      .into(Images)
      .values([
        {
          id: 4,
          image_src:
            'https://fall-in-asia.s3.ap-northeast-2.amazonaws.com/original/1629276297960_99F0C7335A1E76491B.jpg',
          createdAt: '2021-08-18 08:44:58.144970',
          updatedAt: '2021-08-18 08:44:58.144970',
          moment: <any>11,
        },
        {
          id: 5,
          image_src:
            'https://fall-in-asia.s3.ap-northeast-2.amazonaws.com/original/1629277018055_coffee-3723049_960_720.jpg',
          createdAt: '2021-08-18 08:44:58.144970',
          updatedAt: '2021-08-18 08:44:58.144970',
          moment: <any>12,
        },
        {
          id: 6,
          image_src:
            'https://fall-in-asia.s3.ap-northeast-2.amazonaws.com/original/1629277018056_images.jpg',
          createdAt: '2021-08-18 08:44:58.144970',
          updatedAt: '2021-08-18 08:44:58.144970',
          moment: <any>12,
        },
        {
          id: 122,
          image_src:
            'https://fall-in-asia.s3.ap-northeast-2.amazonaws.com/original/1629280059060_1629277812764_202004021639319275_6.jpg',
          createdAt: '2021-08-18 08:44:58.144970',
          updatedAt: '2021-08-18 08:44:58.144970',
          moment: <any>14,
        },
        {
          id: 452,
          image_src:
            'https://fall-in-asia.s3.ap-northeast-2.amazonaws.com/original/1629689317080_GO7THMN5UPFRTCM7AV3SPTQLNM.jpg',
          createdAt: '2021-08-18 08:44:58.144970',
          updatedAt: '2021-08-18 08:44:58.144970',
          moment: <any>18,
        },
        {
          id: 453,
          image_src:
            'https://fall-in-asia.s3.ap-northeast-2.amazonaws.com/original/1629689317082_20210823_114735.jpg',
          createdAt: '2021-08-18 08:44:58.144970',
          updatedAt: '2021-08-18 08:44:58.144970',
          moment: <any>18,
        },
      ])
      .execute();
    await connection
      .createQueryBuilder()
      .insert()
      .into(Articles)
      .values([
        {
          id: 1,
          type: '관광뉴스',
          region:
            'Phuket International Airport, Thep Krasat Tri-Nai Yang Rd, Thalang, Phuket 83110, Thailand',
          lat: 8.11049,
          lng: 98.3115,
          thumbnail:
            'https://fall-in-asia.s3.ap-northeast-2.amazonaws.com/thumb/1629277356771_990DF1485C43C9FC03.jpg',
          title:
            '푸켓 관광객 격리 없이 입국하지만 방역 문제는 여전히 뜨거운 감자',
          content: `<p class="ql-align-center"><img src="https://img.seoul.co.kr/img/upload/2021/07/01/SSI_20210701180628_O2.jpg" alt="태국 정부가 푸켓을 찾는 관광객에 한해 격리 없이 입국을 허용한 첫날인 1일 아랍에미리트(UAE) 아부다비를 떠난 에티하드 항공 여객기를 타 
            고 도착한 가족 관광객이 입국장을 나오며 환대하는 공항 직원들을 향해 손을 흔들고 있다. 푸켓 AP 연합뉴스 ">'</p><p class="ql-align-center"><br></p><p 
            class="ql-align-center"><strong>▲ 태국 정부가 푸켓을 찾는 관광객에 한해 격리 없이 입국을 허용한 첫날인 1일 아랍에미리트(UAE) 아부다비를 떠난 에티하
            드 항공 여객기를 타고 도착한 가족 관광객이 입국장을 나오며 환대하는 공항 직원들을 향해 손을 흔들고 있다.</strong></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><p><span style="color: rgb(34, 34, 34);">태국이 1일 코로나19 백신 접종을  
            마친 외국인에 한해 격리 조치 없이 입국을 허용해 유명 해양 관광지인 푸켓을 방문하도록 했다. </span></p><p><br></p><p><span style="color: rgb(34, 34, 
            34);">물론 관광 수입이 절박한 태국 당국이 감염병 확산의 위험을 무릅쓰고 취한 전향적인 조치로 푸켓 샌드박스란 이름이 붙여졌다.</span></p><p><br></p><p><br></p><p><span style="color: rgb(34, 34, 34);">이에 따라 이스라엘과 아랍에미리트(UAE) 아부다비, 카타르 등 중동 국가 관광객 250명 가량이 네 편의 
            항공기에 몸을 싣고 푸켓 인근 공항에 이날 도착할 예정이다. 이날 도착하는 관광객들은 격리되지 않고 관광을 즐기게 되는데 다만 14일 안에 태국 본토를 찾 
            아서는 안된다.</span></p><p><br></p><p><br></p><p><span style="color: rgb(34, 34, 34);">이런 식으로 제한적인 관광객을 받아들여도 3분기 관광 수입이 2억 7800만 달러(약 3148억원)에 이를 것으로 예상하고 있다.</span></p><p><br></p><p><br></p><p><span style="color: rgb(34, 34, 34);"> 물론 이렇게 한다 
            고 해도 이 나라 경제의 5분의 1을 차지할 정도로 비중 있는 관광 수입에 턱없이 못 미치는 수준이다. 로이터 통신에 따르면 지난해 코로나19 팬데믹(세계적  
            대유행)이 엄습한 이후 관광객 급감으로 태국은 500억 달러(약 57조원)의 손실을 봤다. 이번 실험이 성공적인 평가가 내려지면 다른 섬들로 확대할 계획이다.</span></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><p><span style="color: rgb(34, 34, 34);">하지만 태국의 코로나19 상황
            은 아주 심각해지고 있다. 이날 집계된 신규 확진자는 5533명에 사망자는 57명이나 됐다. 푸켓 섬에서도 지금까지 델타 변이 감염 사례가 두 건이나 확인됐다.다만 푸켓 섬에서는 백신 접종을 최우선 실시해 주민의 70% 정도가 면역이 형성된 것으로 파악된다.</span></p><p><br></p><p><br></p><p><span style="color: rgb(34, 34, 34);">물론 이들 관광객은 음성 검사 결과 증명서와 함께 백신 접종 증명서를 제출하고 이 섬에 발을 딛기 전 체온 측정을 하고 여행 일정과 동 
            선을 점검할 수 있는 어플리케이션을 휴대 전화에 깔아야만 한다. </span></p><p><br></p><p><br></p><p><span style="color: rgb(34, 34, 34);">입국 14일 뒤
            에는 본토도 방문할 수 있는데 그러려면 적어도 세 차례 바이러스 검사를 받아 음성 판정을 받아야만 한다.</span></p><p><br></p><p><br></p><p><span style="color: rgb(34, 34, 34);">한편 우리 정부도 사이판과 트래블 버블 협약을 맺어 백신 접종을 마치고 음성 판정을 받은 우리 국민은 격리 없이 관광 일정을 즐
            길 수 있게 됐다. 이르면 이달 말과 8월 초 사이에 우리 관광객들이 처음으로 사이판을 향해 떠날 수 있을 전망이다.</span></p><p><br></p><p><br></p><p><br></p><p><span style="color: rgb(34, 34, 34);">출처 : </span>https://www.seoul.co.kr/news/newsView.php?id=20210701500164 (<span style="color: rgb(34, 34, 34);">임병선 평화연구소 사무국장 bsnim@seoul.co.kr</span>)</p>`,
          createdAt: '2021-08-31 09:02:37.066830',
          updatedAt: '2021-08-31 09:02:37.066830',
          country: <any>6,
          user: <any>1,
        },
        {
          id: 4,
          type: '관광뉴스',
          region: 'Jeju-do, South Korea',
          lat: 33.3667,
          lng: 126.533,
          thumbnail:
            'https://fall-in-asia.s3.ap-northeast-2.amazonaws.com/thumb/1629279333479_Jeju-Island-hotels-things-to-do-in-Jeju-Island-South-Korea.jpg',
          title: '제주도 사회적 거리두기 3단계 격상, 방역 수칙 내용',
          content: `<p><br></p><p><br></p><p><span style="color: rgb(88, 89, 91);">최근 도내 확진자 증가세가 지역사회 전반으로 확산됨에 따라 코로나바이러스감염증-19 예방  
          및 확산 차단을 위하여 「감염병의 예방 및 관리에 관한 법률」에 근거, 제주 사회적 거리두기를 2단계에서 3단계로 격상하여 행정명령을 아래와 같이 고시합 
          니다.</span></p><p><br></p><p><span style="color: rgb(88, 89, 91);">□ 행정조치 사항</span></p><p><br></p><p><br></p><p><span style="color: rgb(88, 89, 91);">1. 처분기한 : 2021년 7월 19일(월) 0시부터 ~ 별도 해제시까지</span></p><p><br></p><p><br></p><p><span style="color: rgb(88, 89, 91);">2. 처 
          분당사자 : 제주특별자치도 전 도민 및 방문객(관광객 포함)</span></p><p><br></p><p><br></p><p><span style="color: rgb(88, 89, 91);">3. 처분내용 : 거리
          두기 3단계 운영계획 및 시설(분야)별 방역수칙 참조</span></p><p><br></p><p><br></p><p><span style="color: rgb(88, 89, 91);">① 사적모임 : 4명까지 허용
          (5명부터 금지)</span></p><p><br></p><p><br></p><p><span style="color: rgb(88, 89, 91);">② 행사,집회,모임 : 50인 이상 행사·집회 금지</span></p><p><br></p><p><br></p><p><span style="color: rgb(88, 89, 91);">③ 다중이용시설 운영 제한</span></p><p><br></p><p><span style="color: rgb(88, 89, 91);">- 유
          흥시설(유흥주점, 단란주점, 클럽나이트, 감성주점, 헌팅포차) 집합금지 ('21.7.15~)</span></p><p><br></p><p><span style="color: rgb(88, 89, 91);">- 노래
          연습장, 목욕장업, 식당·카페, 수영장(식당·카페는 22시 이후 포장배달만 가능)</span></p><p><br></p><p><br></p><p><span style="color: rgb(88, 89, 91);">④ 종교시설 및 활동</span></p><p><br></p><p><span style="color: rgb(88, 89, 91);">- 정규예배, 미사, 법회 등은 좌석 수의 20%이내(네 칸 띄우기)로 제한 
          운영</span></p><p><br></p><p><span style="color: rgb(88, 89, 91);">- 종교시설 주관 모임 활동 및 행사 금지(식사 및 숙박 포함)</span></p><p><br></p><p><br></p><p><span style="color: rgb(88, 89, 91);">⑤ 마스크 착용 의무화 : 실내는 전체, 실외의 경우 2m이상 거리 유지가 어려운 경우</span></p><p><br></p><p><br></p><p><span style="color: rgb(88, 89, 91);">⑥ 버스,택시 등 교통시설 : 교통수단 이용 중 음식물 섭취(물, 무알콜 음료 제외) 금지</span></p><p><br></p><p><br></p><p><span style="color: rgb(88, 89, 91);">4. 처분기관 : 시설 관련 소관(지도,점검,유관)부서</span></p><p><br></p><p><br></p><p><span style="color: rgb(88, 89, 91);">5. 처분근거 : 「감염병의 예방 및 관리에 관한 법률」 제49조 제1항 제2호 및 제2의2 내지 4호 및 제3항</span></p><p><br></p><p><br></p><p>출처 : 제주관광협회</p>`,
          createdAt: '2021-09-11 09:02:37.066830',
          updatedAt: '2021-09-11 09:02:37.066830',
          country: <any>1,
          user: <any>1,
        },
      ])
      .execute();
    await connection
      .createQueryBuilder()
      .insert()
      .into(Comments)
      .values([
        {
          id: 1,
          content:
            '백신접종 증명서가 있으면 가능하지만 14일동안 추적관리됩니다. 14일동안 3번 바이러스 검사에 통과하면 본토 여행도 승인됩니다',
          createdAt: '2021-09-21 08:20:52.430130',
          updatedAt: '2021-09-21 08:20:52.430130',
          user: <any>1,
          moment: <any>10,
        },
        {
          id: 2,
          content:
            '제가 도쿄에서 회사생활을 했는데 야키니쿠노테츠진 히나타(焼肉の鉄人 ひなた) 가 싸고 2017년기준 3000엔 (3만원) 이면 술 고기 무한리필이 가능했습니다. 이정도에 가성비에 맛있고 양많은 가게를 본적없습니다. 일끝나면 맨날 갔습니다. 어떤 맛집보다 추천합니다.',
          createdAt: '2021-09-18 08:20:52.430130',
          updatedAt: '2021-09-18 08:20:52.430130',
          user: <any>1,
          moment: <any>9,
        },
        {
          id: 3,
          content: '교토 또 가고 싶네요 ㅠ',
          createdAt: '2021-09-15 08:20:52.430130',
          updatedAt: '2021-09-15 08:20:52.430130',
          user: <any>2,
          story: <any>5,
        },
        {
          id: 4,
          content:
            '하노이 에그커피는 기찻길마을에서 먹어봤는데 나중에 저곳도 꼭 가봐야겠네요',
          createdAt: '2021-09-27 08:20:52.430130',
          updatedAt: '2021-09-27 08:20:52.430130',
          user: <any>1,
          moment: <any>12,
        },
        {
          id: 5,
          content: '다모아횟집은 돌산대교랑 가까운데 묘도대교는 모르겠네여',
          createdAt: '2021-10-10 08:20:52.430130',
          updatedAt: '2021-10-10 08:20:52.430130',
          user: <any>11,
          moment: <any>15,
        },
        {
          id: 9,
          content: '츠키지 시장 스시 잔마이 추천해요',
          createdAt: '2021-09-18 08:20:52.430130',
          updatedAt: '2021-09-18 08:20:52.430130',
          user: <any>13,
          moment: <any>9,
        },
        {
          id: 10,
          content:
            '그거 학교 졸업하면 就活할 수 있게 취활비자 내줍니다. 그리고 취업하면 회사에서 비자내줘요 구지 졸업하고나서 부랴부랴 취업비자 신청 할 필요 없어요 가비님',
          createdAt: '2021-09-02 08:20:52.430130',
          updatedAt: '2021-09-02 08:20:52.430130',
          user: <any>1,
          moment: <any>5,
        },
        {
          id: 13,
          content:
            '베트남 확진자는 점차 오르고있고 백신보급률도 높은편은 아닙니다. 그리고 한베관계 악화에 대해선 아 다르고 어 다를수있습니다 2019년  한일관계가 최악이었을때도 비즈니스나 사적으로나 서로 교류는 여느때처럼 활발했던 것 처럼요',
          createdAt: '2021-10-13 08:20:52.430130',
          updatedAt: '2021-10-13 08:20:52.430130',
          user: <any>1,
          moment: <any>18,
        },
        {
          id: 14,
          content:
            '휴양목적이면 다낭이 좋습니다 호치민은 도시느낌이고 동남아틱한 기후죠. 하노이는 사파 하롱베이 이 연계빼고는 하노이자체는 별거없습니다. 취향껏 선택하시면 좋을거같아요.',
          createdAt: '2021-09-13 08:20:52.430130',
          updatedAt: '2021-09-13 08:20:52.430130',
          user: <any>1,
          moment: <any>8,
        },
        {
          id: 15,
          content: '저도 갑자기 오사카마렵네요.. 휴 ㅠ',
          createdAt: '2021-10-03 08:20:52.430130',
          updatedAt: '2021-10-03 08:20:52.430130',
          user: <any>1,
          moment: <any>13,
        },
      ])
      .execute();
    await connection
      .createQueryBuilder()
      .insert()
      .into(SubComments)
      .values([
        {
          id: 1,
          content: '코로나가 끝나면 참았던 만큼  2배 아니 3배 더 즐겨야겠죠 😊',
          createdAt: '2021-09-17 08:20:52.430130',
          updatedAt: '2021-09-17 08:20:52.430130',
          comment: <any>3,
          user: <any>1,
        },
        {
          id: 2,
          content: '진짜 맛있습니다!!! 꼭 가보세요 ^^',
          createdAt: '2021-09-28 08:20:52.430130',
          updatedAt: '2021-09-28 08:20:52.430130',
          comment: <any>4,
          user: <any>7,
        },
        {
          id: 3,
          content: '고마웤ㅋㅋ ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ ',
          createdAt: '2021-09-02 08:20:52.430130',
          updatedAt: '2021-09-02 08:20:52.430130',
          comment: <any>1,
          user: <any>10,
        },
        {
          id: 5,
          content: '아닙니다!',
          createdAt: '2021-09-02 08:20:52.430130',
          updatedAt: '2021-09-02 08:20:52.430130',
          comment: <any>1,
          user: <any>1,
        },
        {
          id: 6,
          content: '나중에 베트남 여행갈때 참고하겠습니다~ 💯',
          createdAt: '2021-10-10 08:20:52.430130',
          updatedAt: '2021-10-10 08:20:52.430130',
          comment: <any>4,
          user: <any>1,
        },
      ])
      .execute();
  }
}
