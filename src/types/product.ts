export type TypeGetProduct = {
    type: "parent" | "variant" | "simple" | "kit" | "simple_kit";
            warranty_unity: "d" | "m" | "y";
            dimensions_unity: "cm" | "m" | "mm";
            weight_unity: "g" | "kg";
            condition: "novo" | "usado" | "recondicionado";
            group_images_by: "sku" | "cor";
            uuid: string;
            sku: string;
            name: string;
            inventory: number;
            items_per_box: number;
            active: boolean;
            brand_uuid?: (string | null) | undefined;
            warranty?: (number | null) | undefined;
            height?: (number | null) | undefined;
            width?: (number | null) | undefined;
            depth?: (number | null) | undefined;
            gross_weight?: (number | null) | undefined;
            net_weight?: (number | null) | undefined;
            resell_price: number;
            shop_price?: (number | null) | undefined;
            cost_price?: (number | null) | undefined;
            promotional_price?: (number | null) | undefined;
            main_description?: (string | null) | undefined;
            secondary_description?: (string | null) | undefined;
            observations?: (string | null) | undefined;
            gtin?: (string | null) | undefined;
            size_grid_uuid?: (string | null) | undefined;
            generic: boolean;
            created_at: string;
            updated_at: string;
            images: string[];
            brand?: string | undefined;
            listings?: Partial<Record<"mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio", {
                            amount: number;
                            accounts: string[];
                        }>> | undefined;
            other_listings?: Partial<Record<"mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio", {
                            amount: number;
                            accounts: string[];
                        }>> | undefined;
            thumbnail?: (string | null) | undefined;
            parent_uuid?: string | undefined;
            own_validations?: {
                id: "uncategorized_images" | "missing_images" | "bad_price" | "bad_stock" | "bad_stock_active" | "missing_cost_price" | "missing_dimensions" | "missing_weight" | "missing_description" | "missing_ml_specs" | "missing_shopee_specs";
                priority: 1 | 2 | 3;
                message: string;
            }[] | undefined;
            completeness?: number | undefined;
            properties?: ({
                name: string;
                value: string;
                type: "variation" | "specification";
            }[] | undefined) | undefined;
            validations?: {
                service_name: "mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio";
                success: boolean;
                errors?: string[] | undefined;
                account_name?: string | undefined;
            }[] | undefined;
            deposit?: ({
                uuid: string;
                name: string;
                uf: string;
                cep: string;
                allowed_ceps: string[];
                main_road?: (string | null) | undefined;
                secondary_road?: (string | null) | undefined;
                number?: (string | null) | undefined;
                district?: (string | null) | undefined;
                city?: (string | null) | undefined;
                default: boolean;
            } | null) | undefined;
        }[];

    