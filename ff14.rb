# encoding: utf-8
require 'open-uri'
require 'nokogiri'
require 'nkf'
require 'json'

$baseurl = 'http://jp.finalfantasyxiv.com'

$items = []
def loadRanking(loadUrl)
    charset = nil
    html = open(loadUrl) do |f|
        charset = f.charset
        f.read
    end
    
    doc = Nokogiri::HTML.parse( html, nil, charset )
    
    doc.xpath('//div[@class="ic_link_txt"]').each do |lineNode|
        
        lineNode.xpath('.//a').each do |node|
            gameUrl = node.attribute('href').value
#             gameUrl = gameUrl.slice(1..-1)
#             /lodestone/playguide/db/item/e813dbce507/
            rUrl = $baseurl + gameUrl
#             p rUrl
            
            itemHTML = open(rUrl) do |f|
                f.read
            end
            itemDoc = Nokogiri::HTML.parse(itemHTML, nil, charset)
            itemTitle = ''
            itemDoc.xpath('//h2').each do |itemNode|
                itemTitle = itemNode.children[0].text
#                 p itemTitle
            end
            item = {}
            itemDesc = []
            itemTypes = []
            itemDoc.xpath('//ul[@class="sys_nq_element list_1col mb10"]').each do |itemNode|
                for i in 0..itemNode.children.length
                    if (itemNode.children[i] && itemNode.children[i].name == 'li') 
                        str = itemNode.children[i].text
                        itemDesc.push str
                        
                        isPercentType = 0
                        type = ['vit', 'pie', 'accuracy', 'determination', 'parry', 'critical', 'skillspeed', 'spellspeed', 'cp', 'craftsmanship', 'control', 'gp', 'gathering', 'perception', 'slow', 'slient', 'poison', 'darken', 'sleep', 'stan', 'bind', 'heavy']
                        type_str = ''
                        if /VIT/ =~ str
                            type_str = type[0]
                        end
                        if /PIE/ =~ str
                            type_str = type[1]
                        end
                        if /命中力/ =~ str
                            type_str = type[2]
                        end
                        if /意思/ =~ str
                            type_str = type[3]
                        end
                        if /受け流し/ =~ str
                            type_str = type[4]
                        end
                        if /クリティカル/ =~ str
                            type_str = type[5]
                        end
                        if /スキルスピード/ =~ str
                            type_str = type[6]
                        end
                        if /スペルスピード/ =~ str
                            type_str = type[7]
                        end
                        if /CP/ =~ str
                            type_str = type[8]
                        end
                        if /作業精度/ =~ str
                            type_str = type[9]
                        end
                        if /加工精度/ =~ str
                            type_str = type[10]
                        end
                        if /GP/ =~ str
                            type_str = type[11]
                        end
                        if /獲得力/ =~ str
                            type_str = type[12]
                        end
                        if /識質力/ =~ str
                            type_str = type[13]
                        end
                        if /スロウ/ =~ str
                            type_str = type[14]
                        end
                        if /沈黙/ =~ str
                            type_str = type[15]
                        end
                        if /毒/ =~ str
                            type_str = type[16]
                        end
                        if /暗闇/ =~ str
                            type_str = type[17]
                        end
                        if /睡眠/ =~ str
                            type_str = type[18]
                        end
                        if /スタン/ =~ str
                            type_str = type[19]
                        end
                        if /バインド/ =~ str
                            type_str = type[20]
                        end
                        if /ヘヴィ/ =~ str
                            type_str = type[21]
                        end
                        
                        
                        
                        if /(\(上限 )/ =~ str
                            isPercentType = 1
                        end
                        
                        if type_str != ''
                            if isPercentType == 1
                                m = str.match(/([0-9]+)\%?/)
                                id = m[1]
                                itemTypes.push(type_str+'per":'+id)
                                item[type_str+'per'] = id;
                                
                                m = str.match(/上限\s?([0-9]+)/)
                                id = m[1]
                                itemTypes.push(type_str+'max":'+id)
                                item[type_str+'max'] = id;
                            end
                            if isPercentType == 0
                                m = str.match(/([0-9]+)\%?/)
                                id = m[0]
                                itemTypes.push(type_str+'":'+id)
                                item[type_str] = id;
                            end
                        end
                    end
                end
            end
            if (itemDesc.length > 0 && itemTypes.length > 0)
                #$items.push('{"name": "' + itemTitle + '", "description": "' + itemDesc.join('　') + '", ' + itemTypes.join(', ') + '}')
                item['name'] = itemTitle;
                item['description'] = itemDesc.join('　');

                $items.push(item);#'{"name": "' + itemTitle + '", "description": "' + itemDesc.join('　') + '", ' + itemTypes.join(', ') + '}')
            end
            item = {}
            itemDesc = []
            itemTypes = []
            itemDoc.xpath('//ul[@class="sys_hq_element list_1col mb10"]').each do |itemNode|
                for i in 0..itemNode.children.length
                    if (itemNode.children[i] && itemNode.children[i].name == 'li') 
                        str = itemNode.children[i].text
                        itemDesc.push str
                        
                        isPercentType = 0
                        type = ['vit', 'pie', 'accuracy', 'determination', 'parry', 'critical', 'skillspeed', 'spellspeed', 'cp', 'craftsmanship', 'control', 'gp', 'gathering', 'perception', 'slow', 'slient', 'poison', 'darken', 'sleep', 'stan', 'bind', 'heavy']
                        type_str = ''
                        if /VIT/ =~ str
                            type_str = type[0]
                        end
                        if /PIE/ =~ str
                            type_str = type[1]
                        end
                        if /命中力/ =~ str
                            type_str = type[2]
                        end
                        if /意思/ =~ str
                            type_str = type[3]
                        end
                        if /受け流し/ =~ str
                            type_str = type[4]
                        end
                        if /クリティカル/ =~ str
                            type_str = type[5]
                        end
                        if /スキルスピード/ =~ str
                            type_str = type[6]
                        end
                        if /スペルスピード/ =~ str
                            type_str = type[7]
                        end
                        if /CP/ =~ str
                            type_str = type[8]
                        end
                        if /作業精度/ =~ str
                            type_str = type[9]
                        end
                        if /加工精度/ =~ str
                            type_str = type[10]
                        end
                        if /GP/ =~ str
                            type_str = type[11]
                        end
                        if /獲得力/ =~ str
                            type_str = type[12]
                        end
                        if /識質力/ =~ str
                            type_str = type[13]
                        end
                        if /スロウ/ =~ str
                            type_str = type[14]
                        end
                        if /沈黙/ =~ str
                            type_str = type[15]
                        end
                        if /毒/ =~ str
                            type_str = type[16]
                        end
                        if /暗闇/ =~ str
                            type_str = type[17]
                        end
                        if /睡眠/ =~ str
                            type_str = type[18]
                        end
                        if /スタン/ =~ str
                            type_str = type[19]
                        end
                        if /バインド/ =~ str
                            type_str = type[20]
                        end
                        if /ヘヴィ/ =~ str
                            type_str = type[21]
                        end
                        
                        
                        
                        if /(\(上限 )/ =~ str
                            isPercentType = 1
                        end
                        
                        if isPercentType == 1
                            m = str.match(/([0-9]+)\%?/)
                            id = m[1]
                            itemTypes.push(type_str+'per":'+id)
                            item[type_str+'per'] = id;
                            m = str.match(/上限\s?([0-9]+)/)
                            id = m[1]
                            itemTypes.push(type_str+'max":'+id)
                            item[type_str+'max'] = id;
                        end
                        if isPercentType == 0
                            m = str.match(/([0-9]+)\%?/)
                            id = m[0]
                            itemTypes.push(type_str+'":'+id)
                            item[type_str] = id;
                        end
                    end
                end
#                 for i in 0..itemNode.children.length
#                     if (itemNode.children[i] && itemNode.children[i].name == 'li') 
#                         p itemNode.children[i].text
#                     end
#                 end
            end
            if (itemDesc.length > 0 && itemTypes.length > 0)
                item['name'] = itemTitle;
                item['description'] = itemDesc.join('　');
                $items.push(item);
                #$items.push('{"name": "' + itemTitle + 'HQ", "description": "' + itemDesc.join('　') + '", ' + itemTypes.join(', ') + '}')
            end


        end
    end
    
end
 
loadRanking("http://jp.finalfantasyxiv.com/lodestone/playguide/db/item/?category2=5&page=1&category3=46")
loadRanking("http://jp.finalfantasyxiv.com/lodestone/playguide/db/item/?category2=5&page=2&category3=46")
loadRanking("http://jp.finalfantasyxiv.com/lodestone/playguide/db/item/?category2=5&page=3&category3=46")

#render :json => $items

file = "ff14.json"
mode = "w"
open( file , mode ){|f| f.write($items.to_json)}

#p $items.to_json
